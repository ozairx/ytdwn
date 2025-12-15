#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const main = require('../src/index');

const argv = yargs(hideBin(process.argv))
  .usage('Usage: ytdwn <playlist_url> [options]')
  .command('$0 <playlist_url>', 'Download and convert a YouTube playlist to MP3', (yargs) => {
    yargs.positional('playlist_url', {
      describe: 'The URL of the YouTube playlist',
      type: 'string',
    });
  })
  .option('output', {
    alias: 'o',
    describe: 'The directory to save the MP3 files',
    type: 'string',
    default: './downloads',
  })
  .option('parallel', {
    alias: 'p',
    describe: 'Number of parallel downloads',
    type: 'number',
    default: 1,
  })
  .option('skip-existing', {
    alias: 's',
    describe: 'Skip files that already exist in the output directory',
    type: 'boolean',
    default: false,
  })
  .option('dry-run', {
    alias: 'd',
    describe: 'Perform a dry run without saving any files',
    type: 'boolean',
    default: false,
  })
  .option('limit', {
    alias: 'l',
    describe: 'Stop after converting a specific number of videos',
    type: 'number',
  })
  .option('cookies', {
    alias: 'c',
    describe: 'Path to a cookies file to authenticate with YouTube',
    type: 'string',
  })
  .alias('h', 'help')
  .alias('v', 'version')
  .demandCommand(1, 'You must provide a playlist URL.')
  .help()
  .strict()
  .argv;

main(argv);
