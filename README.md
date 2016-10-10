
# `$ gif`

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/gif-cli.svg)](https://www.npmjs.com/package/gif-cli) [![Downloads](https://img.shields.io/npm/dt/gif-cli.svg)](https://www.npmjs.com/package/gif-cli) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Gif animations in your terminal!

[![gif-cli](doc/nyan.gif)](#)

## Installation

This tool uses `image-to-ascii` as dependency–that means you have to [install GraphicsMagick first](https://github.com/IonicaBizau/image-to-ascii#installation). Then you can install `gif-cli`:

```sh
$ npm i -g gif-cli
```
## CLI Usage
```sh
gif-cli my-animation.gif
# or even shorter
gif my-animation.gif
```

Then your animated gif will appear in your terminal. :tada:


## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save gif-cli
```



```js
// Dependencies
var GifCli = require("gif-cli")
  , CliFrames = require("cli-frames")
  ;

// Convert the gif file into text frames
GifCli(__dirname + "/nyantocat.gif", function (err, frames) {
    if (err) { return Logger.log(err, "error"); }

    // Show the animation
    var animation = new CliFrames();
    animation.load(frames);
    animation.start({
        repeat: true
      , delay: 50
    });
});
```

## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
