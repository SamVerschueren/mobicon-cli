import test from 'ava';
import execa from 'execa';
import del from 'del';
import pathExists from 'path-exists';

test.after(async () => {
	await del(['android', 'icons']);
});

test('error', async t => {
	await t.throws(execa('./cli.js'), /Please provide an input file/);
	await t.throws(execa('./cli.js', ['fixtures/icon.png']), /Please provide at least one platform/);
});

test('generate', async t => {
	await execa('./cli.js', ['fixtures/icon.png', '-p', 'android', '-o', 'android']);

	t.true(pathExists.sync('android/drawable/icon.png'));
});

test('multi platform', async t => {
	await execa('./cli.js', ['fixtures/icon.png', '-p', 'android', '-p', 'ios', '-o', 'icons']);

	t.true(pathExists.sync('icons/ios/icon.png'));
	t.true(pathExists.sync('icons/android/drawable/icon.png'));
});
