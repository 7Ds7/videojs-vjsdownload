import "./videojs-vjsdownload.css";

if (typeof videojs === "undefined") {
  console.warn("vjstranscribe videojs not detected");
}

const Plugin = videojs.getPlugin("plugin");

class VjsDownload extends Plugin {
  // Default options for the plugin.
  defaultOptions = {
    beforeElement: "fullscreenToggle",
    textControl: "Download video",
    name: "downloadButton",
    downloadURL: null,
  };

  options;

  constructor(player, options) {
    super(player, options);
    this.options = { ...this.defaultOptions, ...options };

    player.addClass("vjs-download");

    this.on(player, "ready", function () {
      const Button = videojs.getComponent("Button");
      let button = new Button(player, {
        className: "vjs-download",
        controlText: "Download",
        clickHandler: this.handleClick,
      });

      player
        .getChild("ControlBar")
        .el()
        .insertBefore(
          button.el(),
          player.controlBar.getChild(this.options.beforeElement).el()
        );
    });
  }

  handleClick() {
    window.open(this.options_.downloadURL || p.currentSrc(), "Download");
    this.player().trigger("downloadvideo");
  }
}

videojs.registerPlugin("vjsdownload", VjsDownload);
