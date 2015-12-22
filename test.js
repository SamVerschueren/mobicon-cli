import test from 'ava';
import execa from 'execa';
import del from 'del';
import pathExists from 'path-exists';

test.after(async () => {
	await del(['res', 'ios', 'bb10']);
});

test('error', async t => {
	await t.throws(execa('./cli.js'), /Please provide valid arguments/);
});

test('generate', async t => {
	await execa('./cli.js', ['android', './fixtures/icon.png']);

	t.true(pathExists.sync('res/drawable/icon.png'));
});

test('output directory', async t => {
	await execa('./cli.js', ['ios', './fixtures/icon.png', '--out', 'ios']);

	t.true(pathExists.sync('ios/icons/icon.png'));
});
