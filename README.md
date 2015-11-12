# `$ gif-cli` [![Support this project][donate-now]][paypal-donations]

Gif animations in your terminal!

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

## Example

Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i gif-cli
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

## Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md