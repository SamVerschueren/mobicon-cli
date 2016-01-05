import test from 'ava';
import execa from 'execa';
import tempfile from 'tempfile';
import path from 'path';
import pathExists from 'path-exists';

test.beforeEach(t => {
	t.context.tmp = tempfile();
});

test('error', async t => {
	await t.throws(execa('./cli.js'), /Please provide an input file/);
	await t.throws(execa('./cli.js', ['fixtures/icon.png']), /Please provide at least one platform/);
});

test('png input', async t => {
	await execa('./cli.js', ['fixtures/icon.png', '-p', 'android', '-o', t.context.tmp]);

	t.true(pathExists.sync(path.join(t.context.tmp, 'drawable/icon.png')));
});

test('svg input', async t => {
	await execa('./cli.js', ['fixtures/icon.svg', '-p', 'android', '-o', t.context.tmp]);

	t.true(pathExists.sync(path.join(t.context.tmp, 'drawable/icon.png')));
});

test('multi platform', async t => {
	await execa('./cli.js', ['fixtures/icon.png', '-p', 'android', '-p', 'ios', '-o', t.context.tmp]);

	t.true(pathExists.sync(path.join(t.context.tmp, 'ios/icon.png')));
	t.true(pathExists.sync(path.join(t.context.tmp, 'android/drawable/icon.png')));
});
