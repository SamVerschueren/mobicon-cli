const path = require('path');
const execa = require('execa');
const tempy = require('tempy');
const pathExists = require('path-exists');

describe('input parameter errors', () => {
	test('error no input file', async () => {
		expect.assertions(1);
		try {
			await execa('./cli.js')
		} catch (e) {
			expect(e.message).toMatch('Please provide an input file.');
		}
	});

	test('error no platform selected', async () => {
		expect.assertions(1);
		try {
			await execa('./cli.js', ['fixtures/icon.png']);
		} catch (e) {
			expect(e.message).toMatch('Please provide at least one platform.');
		}
	});
});

describe('android platform', () => {
	test('android - png input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.png', '-p', 'android', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'mipmap-ldpi/icon.png')),
			pathExists(path.join(tempFile, 'mipmap-mdpi/icon.png')),
			pathExists(path.join(tempFile, 'mipmap-hdpi/icon.png')),
			pathExists(path.join(tempFile, 'mipmap-xhdpi/icon.png')),
			pathExists(path.join(tempFile, 'mipmap-xxhdpi/icon.png')),
			pathExists(path.join(tempFile, 'mipmap-xxxhdpi/icon.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});

	test('android - svg input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.svg', '-p', 'android', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'mipmap-ldpi/icon.png')),
			pathExists(path.join(tempFile, 'mipmap-mdpi/icon.png')),
			pathExists(path.join(tempFile, 'mipmap-hdpi/icon.png')),
			pathExists(path.join(tempFile, 'mipmap-xhdpi/icon.png')),
			pathExists(path.join(tempFile, 'mipmap-xxhdpi/icon.png')),
			pathExists(path.join(tempFile, 'mipmap-xxxhdpi/icon.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});
});

describe('ios platform', () => {
	test('ios - png input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.png', '-p', 'ios', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'icon.png')),
			pathExists(path.join(tempFile, 'icon@2x.png')),
			pathExists(path.join(tempFile, 'icon-20.png')),
			pathExists(path.join(tempFile, 'icon-40.png')),
			pathExists(path.join(tempFile, 'icon-40@2x.png')),
			pathExists(path.join(tempFile, 'icon-40@3x.png')),
			pathExists(path.join(tempFile, 'icon-1024.png')),
			pathExists(path.join(tempFile, 'icon-50.png')),
			pathExists(path.join(tempFile, 'icon-50@2x.png')),
			pathExists(path.join(tempFile, 'icon-60.png')),
			pathExists(path.join(tempFile, 'icon-60@2x.png')),
			pathExists(path.join(tempFile, 'icon-60@3x.png')),
			pathExists(path.join(tempFile, 'icon-72.png')),
			pathExists(path.join(tempFile, 'icon-72@2x.png')),
			pathExists(path.join(tempFile, 'icon-76.png')),
			pathExists(path.join(tempFile, 'icon-76@2x.png')),
			pathExists(path.join(tempFile, 'icon-83.5@2x.png')),
			pathExists(path.join(tempFile, 'icon-small.png')),
			pathExists(path.join(tempFile, 'icon-small@2x.png')),
			pathExists(path.join(tempFile, 'icon-small@3x.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});

	test('ios - svg input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.svg', '-p', 'ios', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'icon.png')),
			pathExists(path.join(tempFile, 'icon@2x.png')),
			pathExists(path.join(tempFile, 'icon-20.png')),
			pathExists(path.join(tempFile, 'icon-40.png')),
			pathExists(path.join(tempFile, 'icon-40@2x.png')),
			pathExists(path.join(tempFile, 'icon-40@3x.png')),
			pathExists(path.join(tempFile, 'icon-1024.png')),
			pathExists(path.join(tempFile, 'icon-50.png')),
			pathExists(path.join(tempFile, 'icon-50@2x.png')),
			pathExists(path.join(tempFile, 'icon-60.png')),
			pathExists(path.join(tempFile, 'icon-60@2x.png')),
			pathExists(path.join(tempFile, 'icon-60@3x.png')),
			pathExists(path.join(tempFile, 'icon-72.png')),
			pathExists(path.join(tempFile, 'icon-72@2x.png')),
			pathExists(path.join(tempFile, 'icon-76.png')),
			pathExists(path.join(tempFile, 'icon-76@2x.png')),
			pathExists(path.join(tempFile, 'icon-83.5@2x.png')),
			pathExists(path.join(tempFile, 'icon-small.png')),
			pathExists(path.join(tempFile, 'icon-small@2x.png')),
			pathExists(path.join(tempFile, 'icon-small@3x.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});
});

describe('pwa platform', () => {
	test('pwa - png input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.png', '-p', 'pwa', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'icon-72x72.png')),
			pathExists(path.join(tempFile, 'icon-96x96.png')),
			pathExists(path.join(tempFile, 'icon-128x128.png')),
			pathExists(path.join(tempFile, 'icon-144x144.png')),
			pathExists(path.join(tempFile, 'icon-152x152.png')),
			pathExists(path.join(tempFile, 'icon-192x192.png')),
			pathExists(path.join(tempFile, 'icon-384x384.png')),
			pathExists(path.join(tempFile, 'icon-512x512.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});

	test('pwa - svg input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.svg', '-p', 'pwa', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'icon-72x72.png')),
			pathExists(path.join(tempFile, 'icon-96x96.png')),
			pathExists(path.join(tempFile, 'icon-128x128.png')),
			pathExists(path.join(tempFile, 'icon-144x144.png')),
			pathExists(path.join(tempFile, 'icon-152x152.png')),
			pathExists(path.join(tempFile, 'icon-192x192.png')),
			pathExists(path.join(tempFile, 'icon-384x384.png')),
			pathExists(path.join(tempFile, 'icon-512x512.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});
});

describe('blackberry10 platform', () => {
	test('blackberry10 - png input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.png', '-p', 'blackberry10', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'icon-90.png')),
			pathExists(path.join(tempFile, 'icon-96.png')),
			pathExists(path.join(tempFile, 'icon-110.png')),
			pathExists(path.join(tempFile, 'icon-144.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});

	test('blackberry10 - svg input', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.svg', '-p', 'blackberry10', '-o', tempFile]);

		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'icon-90.png')),
			pathExists(path.join(tempFile, 'icon-96.png')),
			pathExists(path.join(tempFile, 'icon-110.png')),
			pathExists(path.join(tempFile, 'icon-144.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});
});

describe('multi platform', () => {
	test('(android, ios, pwa, blackberry10) - png file', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.png', '-p', 'android', '-p', 'ios', '-p', 'pwa', '-p', 'blackberry10', '-o', tempFile]);
		
		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'android/mipmap-hdpi/icon.png')),
			pathExists(path.join(tempFile, 'ios/icon.png')),
			pathExists(path.join(tempFile, 'pwa/icon-128x128.png')),
			pathExists(path.join(tempFile, 'blackberry10/icon-110.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});

	test('(android, ios, pwa, blackberry10) - svg file', async () => {
		const tempFile = tempy.file();
		await execa('./cli.js', ['fixtures/icon.svg', '-p', 'android', '-p', 'ios', '-p', 'pwa', '-p', 'blackberry10', '-o', tempFile]);
		
		const doesFileExist = await Promise.all([
			pathExists(path.join(tempFile, 'ios/icon.png')),
			pathExists(path.join(tempFile, 'android/mipmap-hdpi/icon.png')),
		]);
		let doesExist = true;
		doesFileExist.map(item => {
			if (!item) {
				doesExist = false;
			}
		});

		expect(doesExist).toBe(true);
	});
});
