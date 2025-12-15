# ytdwn

A command-line tool to download YouTube playlists and convert them to MP3.

## Disclaimer

This tool is intended for personal and educational use only. Downloading copyrighted content from YouTube may violate their Terms of Service. Please respect the rights of content creators and use this tool responsibly.

## Prerequisites

This tool now uses `yt-dlp` under the hood for maximum reliability. You **must** have `yt-dlp` installed and available in your system's PATH.

### Installing yt-dlp

**Windows (using winget or scoop):**
```bash
winget install yt-dlp/yt-dlp
# or
scoop install yt-dlp
```

**macOS (using Homebrew):**
```bash
brew install yt-dlp
```

**Linux (using pip):**
```bash
sudo pip install yt-dlp
```

`yt-dlp` also requires `ffmpeg` for audio conversion. Please ensure `ffmpeg` is also installed.

## Installation

Make sure you have Node.js (LTS version) and `ffmpeg` installed on your system.

To install the CLI globally, run:

```bash
npm install -g .
```

## Usage

```bash
ytdwn <playlist_url> [options]
```

### Examples

- Download a playlist to the default `./downloads` directory:

  ```bash
  yt-playlist-mp3 "https://www.youtube.com/playlist?list=PL..."
  ```

- Specify a different output directory:

  ```bash
  yt-playlist-mp3 "https://www.youtube.com/playlist?list=PL..." --output /path/to/music
  ```

- Download with a higher audio quality and 5 parallel downloads:

  ```bash
  yt-playlist-mp3 "https://www.youtube.com/playlist?list=PL..." --quality highest --parallel 5
  ```

- Skip already downloaded files:

  ```bash
  yt-playlist-mp3 "https://www.youtube.com/playlist?list=PL..." --skip-existing
  ```

## Options

| Flag              | Alias    | Description                                       | Default                |
| ----------------- | -------- | ------------------------------------------------- | ---------------------- |
| `--output`        | `-o`     | The directory to save the MP3 files.              | `./downloads`          |
| `--parallel`      | `-p`     | Number of parallel downloads.                     | 1                      |
| `--skip-existing` | `-s`     | Skip files that already exist in the output dir.  | `false`                |
| `--dry-run`       | `-d`     | Perform a dry run without saving any files.       | `false`                |
| `--limit`         | `-l`     | Only convert the first X videos from the playlist. | `(none)`               |
| `--help`          | `-h`     | Show help.                                        |                        |
| `--version`       | `-v`     | Show version number.                              |                        |

## Troubleshooting

- **`ffmpeg` not found:** Ensure `ffmpeg` is installed and accessible in your system's PATH. You can download it from [ffmpeg.org](https://ffmpeg.org/download.html).
- **Invalid Playlist URL:** Double-check the URL. It must be a public YouTube playlist link.
- **Private/Unavailable Videos:** The tool will skip any videos in the playlist that are private or have been removed.
- **Connection Issues:** A stable internet connection is required. The tool will attempt to download each video individually and report any failures.
