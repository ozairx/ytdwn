const youtubedl = require('youtube-dl-exec');
const path = require('path');

/**
 * Downloads and converts a YouTube video to MP3 using yt-dlp.
 * @param {{id: string, title: string, url: string}} video The video object.
 * @param {string} outputDir The directory to save the MP3 file.
 * @returns {Promise<void>} A promise that resolves when the processing is complete.
 */
async function processVideoWithYtDlp(video, outputDir) {
  const outputTemplate = path.join(outputDir, '%(title)s.%(ext)s');

  await youtubedl(video.url, {
    extractAudio: true,
    audioFormat: 'mp3',
    output: outputTemplate,
  });
}

module.exports = { processVideoWithYtDlp };
