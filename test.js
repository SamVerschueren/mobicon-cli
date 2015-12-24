import test from 'ava';
import execa from 'execa';
import tempfile from 'tempfile';
import path from 'path';
import pathExists from 'path-exists';

test('error', async t => {
	await t.throws(execa('./cli.js'), /Please provide an input file/);
	await t.throws(execa('./cli.js', ['fixtures/icon.png']), /Please provide at least one platform/);
});

test('generate', async t => {
	const dest = tempfile();

	await execa('./cli.js', ['fixtures/icon.png', '-p', 'android', '-o', dest]);

	t.true(pathExists.sync(path.join(dest, 'drawable/icon.png')));
});

test('multi platform', async t => {
	const dest = tempfile();

	await execa('./cli.js', ['fixtures/icon.png', '-p', 'android', '-p', 'ios', '-o', dest]);

	t.true(pathExists.sync(path.join(dest, 'ios/icon.png')));
	t.true(pathExists.sync(path.join(dest, 'android/drawable/icon.png')));
});
