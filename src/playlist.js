const youtubedl = require('youtube-dl-exec');

/**
 * Fetches the video information from a YouTube playlist URL.
 * @param {string} playlistUrl The URL of the YouTube playlist.
 * @returns {Promise<{title: string, videos: Array<{id: string, title: string, url: string}>}>} A promise that resolves to an object containing the playlist title and a list of videos.
 */
async function getPlaylistVideos(playlistUrl) {
  try {
    // Sanitize URL by removing shell escape characters
    const sanitizedUrl = playlistUrl.replace(/\\([?=&])/g, '$1');

    const playlistInfo = await youtubedl(sanitizedUrl, {
      dumpSingleJson: true,
      flatPlaylist: true,
    });

    const videos = playlistInfo.entries.map(video => ({
      id: video.id,
      title: video.title,
      url: video.url,
    }));

    return {
      title: playlistInfo.title,
      videos: videos,
    };

  } catch (error) {
    const errText = error.stderr || JSON.stringify(error, null, 2) || 'Unknown error';
    throw new Error(`Failed to fetch playlist info with yt-dlp. Is yt-dlp installed and in your PATH? Original error: ${errText}`);
  }
}

module.exports = { getPlaylistVideos };
