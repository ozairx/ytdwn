const fs = require('fs');
const path = require('path');
const { getPlaylistVideos } = require('./playlist');
const { processVideoWithYtDlp } = require('./processor');
const logger = require('./logger');

async function main(options) {
  const { playlist_url, output, parallel, skipExisting, dryRun, limit } = options;

  if (dryRun) {
    logger.warn('Dry run enabled. No files will be downloaded or converted.');
  }

  // 1. Validate URL and get playlist videos
  let playlistData;
  try {
    logger.info('Fetching playlist information...');
    playlistData = await getPlaylistVideos(playlist_url);
    if (limit > 0) {
      playlistData.videos = playlistData.videos.slice(0, limit);
      logger.info(`Limiting to the first ${playlistData.videos.length} videos.`);
    }
    logger.success(`Found ${playlistData.videos.length} videos to process from playlist: "${playlistData.title}".`);
  } catch (error) {
    logger.error(`Failed to fetch playlist: ${error.message}`);
    process.exit(1);
  }

  const { title: playlistTitle, videos } = playlistData;

  // 2. Create output directory
  const sanitizedPlaylistTitle = playlistTitle.replace(/[\\/:*?"<>|]/g, '-');
  const finalOutputDir = path.join(output, sanitizedPlaylistTitle);

  if (!dryRun && !fs.existsSync(finalOutputDir)) {
    fs.mkdirSync(finalOutputDir, { recursive: true });
  }

  // 3. Process videos
  const totalVideos = videos.length;
  let completedVideos = 0;

  const processVideo = async (video) => {
    // yt-dlp handles sanitization, but we check existence with our own title.
    const sanitizedTitle = video.title.replace(/[\\/:*?"<>|]/g, '-');
    const outputFilePath = path.join(finalOutputDir, `${sanitizedTitle}.mp3`);

    if (skipExisting && fs.existsSync(outputFilePath)) {
      logger.info(`Skipping "${video.title}" (already exists).`);
      completedVideos++;
      return;
    }

    if (dryRun) {
      logger.info(`[DRY RUN] Would download and convert "${video.title}" to "${outputFilePath}".`);
      completedVideos++;
      return;
    }

    const spinner = logger.spinner(`[${completedVideos + 1}/${totalVideos}] Processing "${video.title}"...`);
    try {
      await processVideoWithYtDlp(video, finalOutputDir);
      spinner.succeed(`[${completedVideos + 1}/${totalVideos}] Processed "${video.title}".`);
      completedVideos++;
    } catch (error) {
      const errText = error.stderr || JSON.stringify(error, null, 2) || 'Unknown error';
      spinner.fail(`Failed to process "${video.title}": ${errText}`);
    }
  };

  // 4. Run downloads in parallel (or sequentially)
  const parallelLimit = Math.max(1, Math.min(parallel, 10)); // Clamp between 1 and 10
  const queue = [...videos];

  const worker = async () => {
    while (queue.length > 0) {
      const video = queue.shift();
      if (video) {
        await processVideo(video);
      }
    }
  };

  const workers = Array(parallelLimit).fill(null).map(() => worker());
  await Promise.all(workers);

  logger.success('All tasks completed.');
  process.exit(0);
}

module.exports = main;
