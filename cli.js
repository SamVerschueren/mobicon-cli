#!/usr/bin/env node
'use strict';
const meow = require('meow');
const mobicon = require('mobicon');
const logSymbols = require('log-symbols');
const chalk = require('chalk');

const cli = meow(`
	Usage
	  $ mobicon platform file

	Options
	  --out  The output directory

	Examples
	  $ mobicon android icon.png
	    ✔  success
	  $ mobicon ios icon.svg --out resources
	    ✔  success
`);

if (cli.input.length < 2) {
	console.error('Please provide valid arguments.');
	process.exit(1);
}

mobicon(cli.input[1], {platform: cli.input[0], dest: cli.flags.out || '.'})
	.then(() => {
		console.log(`  ${logSymbols.success}  success`);
	})
	.catch(err => {
		console.log(`  ${logSymbols.error} ${chalk.bold.red('error')}  ${err.message}`);
	});
