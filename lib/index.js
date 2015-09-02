// Dependencies
var CliFrames = require("cli-frames")
  , ImageToAscii = require("image-to-ascii")
  , GifExplode = require("gif-explode")
  , OneByOne = require("one-by-one")
  , Fs = require("fs")
  , Tmp = require("tmp")
  ;

/**
 * GifCli
 * Converts the gif file into ASCII frames.
 *
 * @name GifCli
 * @function
 * @param {String} path The input gif file path.
 * @param {Function} callback The callback function.
 */
function GifCli(path, callback) {
    var frames = [];

    OneByOne([
        Tmp.dir
      , function (next, tmpDir) {
            var str = Fs.createReadStream(path)
              , isFinished = false
              , complete = []
              , i = 0
              ;

            str.on("end", function () {
                isFinished = true;
            });

            str.pipe(
                GifExplode(function (frame) {
                    Tmp.file({ postfix: ".gif", }, function (err, cImg) {
                        (function (i, cImg) {
                            if (err) { return next(err); }
                            var wStr = Fs.createWriteStream(cImg);
                            frame.pipe(wStr);
                            complete[i] = false;
                            wStr.on("close", function () {
                                // TODO Allow passing options
                                ImageToAscii(cImg, function (err, asciified) {
                                    complete[i] = true;
                                    frames[i] = asciified || "";
                                    // TODO https://github.com/hughsk/gif-explode/issues/4
                                    //if (err) { return next(err); }
                                    if (!isFinished) { return; }
                                    if (!complete.filter(function (c) {
                                        return c !== true
                                    }).length) {
                                        next();
                                    }
                                });
                            });
                        })(i++, cImg);
                    });
                })
            );
        }
      , function (next) {
            frames = frames.filter(Boolean);
            next();
        }
    ], function (err) {
        if (err) { return callback(err); }
        callback(null, frames);
    });
}

module.exports = GifCli;
