(() => {
  // src/videojs-vjsdownload.js
  if (typeof videojs === "undefined") {
    console.warn("vjstranscribe videojs not detected");
  }
  var Plugin = videojs.getPlugin("plugin");
  var VjsDownload = class extends Plugin {
    // Default options for the plugin.
    defaultOptions = {
      beforeElement: "fullscreenToggle",
      textControl: "Download video",
      name: "downloadButton",
      downloadURL: null
    };
    options;
    constructor(player, options) {
      super(player, options);
      this.options = { ...this.defaultOptions, ...options };
      player.addClass("vjs-download");
      this.on(player, "ready", function() {
        const Button = videojs.getComponent("Button");
        let button = new Button(player, {
          className: "vjs-download",
          controlText: "Download",
          clickHandler: this.handleClick
        });
        player.getChild("ControlBar").el().insertBefore(button.el(), player.controlBar.getChild(this.options.beforeElement).el());
      });
    }
    handleClick() {
      let p = this.player();
      window.open(this.options_.downloadURL || p.currentSrc(), "Download");
      p.trigger("downloadvideo");
    }
  };
  videojs.registerPlugin("vjsdownload", VjsDownload);
})();
