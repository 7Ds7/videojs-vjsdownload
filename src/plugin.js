import videojs from 'video.js';

// Default options for the plugin.
const defaults = {};

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

  var download_button = player.controlBar.addChild('button', {
      text: "WRD",
      // other options
    });

  download_button.addClass("vjs-vjsdownload");
  // this [8] here is quite silly

  player.controlBar.el().insertBefore(download_button.el(), player.controlBar.getChild('playbackRateMenuButton').el() )
  //player.controlBar.insertBefore(player.controlBar.children().CustomControlSpacer, download_button)
  download_button.on('click', downloadPress);

};

const downloadPress = function() {
  var p = this.player();
  window.open(p.currentSrc(),'Download');
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
