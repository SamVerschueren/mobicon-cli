# mobicon-cli [![Build Status](https://travis-ci.org/SamVerschueren/mobicon-cli.svg?branch=master)](https://travis-ci.org/SamVerschueren/mobicon-cli)

> Mobile app icon generator


## Install

```
$ npm install --global mobicon-cli
```

> Note: Make sure to install [GraphicsMagick](https://github.com/SamVerschueren/mobicon#graphicsmagick) as well.


## Usage

```
$ mobicon --help

  Usage
    $ mobicon <file>

  Options
    --platform, -p      Platform to generate icons for
    --background, -b    Color of the icon background if the icon is transparant [Default: white]
    --contentRatio, -r  Logo-icon ratio [Default: 1]
    --roundedCorners    Generate icons with rounded corners [Default: true for pwa and Android]
    --borderRadius      Border radius percentage [Default: 0.0909]
    --out, -o           Output directory [Default: cwd]

  Examples
    $ mobicon icon.png -p=android
      ✔  success
    $ mobicon icon.png -p=android -p=ios -p=pwa
      ✔  success
    $ mobicon icon.svg -p=ios -o=resources
      ✔  success
```


## Platforms

A list of the available platforms and their generated icons can be found [here](https://github.com/SamVerschueren/mobicon#platforms).


## Related

- [mobicon](https://github.com/SamVerschueren/mobicon) - API for this module


## License

MIT © [Sam Verschueren](http://github.com/SamVerschueren)
