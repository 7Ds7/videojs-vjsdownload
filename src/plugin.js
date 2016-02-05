import videojs from 'video.js';

// Default options for the plugin.
const defaults = {
  beforeElement: 'fullscreenToggle'
};

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 * @param    {Object} [options={}]
 */
const onPlayerReady = (player, options) => {
  player.addClass('vjs-vjsdownload');

  const DownloadButton = player.controlBar.addChild('button', {
    // other options
  });

  DownloadButton.addClass('vjs-vjsdownload');
  player.controlBar.el().insertBefore(DownloadButton.el(),
    player.controlBar.getChild(options.beforeElement).el());

  let downloadPress = function() {
    let p = this.player();

    window.open(p.currentSrc(), 'Download');
  };

  DownloadButton.on('click', downloadPress);

};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function vjsdownload
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const vjsdownload = function(options) {
  this.ready(() => {
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
videojs.plugin('vjsdownload', vjsdownload);

export default vjsdownload;
