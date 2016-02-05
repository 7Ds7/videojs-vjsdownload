# videojs-vjsdownload

Adds a button to download the video inside the player

## Usage
Include the plugin files

* videojs-vjsdownload.js
* videojs-vjsdownload.css

```
var player = videojs(document.querySelector('.video-js'), {
  "playbackRates": [1, 2],
  plugins: {
    vjsdownload:{
      beforeElement: 'playbackRateMenuButton'
    }
  }
} , function() {
  console.log('Callback video-js initiated');
});
```

## Options
 * beforeElement: name of the player.controlBar component for the button to be attached before
  - default:  fullscreenMenuToggle


## Style
By default the download icon is the play button icon rotated 90deg, to include a custom icon please refer to videojs-vjsdownload.css file


----------


### Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Getting Started](#getting-started)
  - [Running Tests](#running-tests)
  - [Tag and Release](#tag-and-release)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting Started

1. Clone this repository!
1. Install dependencies: `npm install`
1. Run a development server: `npm start`

That's it! Refer to the [video.js plugin standards](https://github.com/videojs/generator-videojs-plugin/docs/standards.md) for more detail.

### Running Tests

- In all available and supported browsers: `npm test`
- In a specific browser: `npm run test:chrome`, `npm run test:firefox`, etc.
- While development server is running, navigate to [`http://localhost:9999/test/`](http://localhost:9999/test/) (_note:_ port may vary, check console output)

### Tag and Release

1. Make sure everything is committed.
1. `npm version *` where `*` is `major`, `minor`, `patch`, etc. [Read more about versioning.](https://github.com/videojs/generator-videojs-plugin/docs/standards.md#versioning)
1. `npm publish`

## License

Apache-2.0. Copyright (c) Brightcove, Inc.
