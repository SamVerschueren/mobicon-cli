#!/usr/bin/env node
'use strict';
const path = require('path');
const updateNotifier = require('update-notifier');
const meow = require('meow');
const mobicon = require('mobicon');
const logSymbols = require('log-symbols');

const cli = meow(`
	Usage
	  $ mobicon <file>

	Options
	  --platform, -p      Platform to generate icons for
	  --background, -b    Color of the icon background if the icon is transparant [Default: white]
	  --contentRatio, -r  Logo-icon ratio [Default: 1]
	  --out, -o           Output directory [Default: cwd]

	Examples
	  $ mobicon icon.png -p=android
	    ✔  success
	  $ mobicon icon.png -p=android -p=ios
	    ✔  success
	  $ mobicon icon.svg -p=ios -o=resources
	    ✔  success
`, {
	flags: {
		platform: {
			type: 'string',
			alias: 'p'
		},
		background: {
			type: 'string',
			alias: 'b',
			default: 'white'
		},
		contentRatio: {
			type: 'number',
			alias: 'r',
			default: '1'
		},
		out: {
			type: 'string',
			alias: 'o',
			default: process.cwd()
		}
	}
});

updateNotifier({pkg: cli.pkg}).notify();

if (cli.input.length === 0) {
	console.error('Please provide an input file.');
	process.exit(1);
}

if (!cli.flags.platform) {
	console.error('Please provide at least one platform.');
	process.exit(1);
}

const platforms = [].concat(cli.flags.platform);

Promise.all(platforms.map(platform => {
	let dest = cli.flags.out;

	if (platforms.length > 1) {
		dest = path.join(dest, platform);
	}

	return mobicon(cli.input[0], {
		platform,
		dest,
		background: cli.flags.background,
		contentRatio: cli.flags.contentRatio
	});
})).then(() => {
	console.log(`  ${logSymbols.success}  success`);
}).catch(error => {
	console.log(`  ${logSymbols.error}  ${error.message}`);
});
