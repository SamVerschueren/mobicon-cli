# genicon-cli [![Build Status](https://travis-ci.com/andrefortin/genicon-cli.svg?branch=master)](https://travis-ci.com/andrefortin/genicon-cli)

> Generate icons for mobile apps and broswer extensions/plugins

## Install

```
$ npm install --global genicon-cli
```

> Note: Make sure to install [GraphicsMagick](https://github.com/andrefortin/genicon#graphicsmagick) as well.

## Usage

```
$ genicon --help

  Usage
    $ genicon <file>

  Options
    --platform, -p      Platform to generate icons for
    --background, -b    Color of the icon background if the icon is transparant [Default: white]
    --contentRatio, -r  Logo-icon ratio [Default: 1]
    --roundedCorners    Generate icons with rounded corners [Default: true for pwa and Android]
    --borderRadius      Border radius percentage [Default: 0.0909]
    --out, -o           Output directory [Default: cwd]

  Examples
    $ genicon icon.png -p=android
      ✔  success
    $ genicon icon.png -p=android -p=ios -p=pwa
      ✔  success
    $ genicon icon.svg -p=ios -o=resources
      ✔  success
```

## Platforms

A list of the available platforms and their generated icons can be found [here](https://github.com/andrefortin/genicon#platforms).

## Related

- [genicon](https://github.com/andrefortin/genicon) - API for this module

## License

MIT © [Andre Fortin](http://github.com/andrefortin)
