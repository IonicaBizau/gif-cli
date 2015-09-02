// Dependencies
var GifCli = require("../lib")
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
