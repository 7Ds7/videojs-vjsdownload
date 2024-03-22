/*!
* videojs-vjsdownload
* @author 7Ds7
* @version 2.0.0
* @url https://github.com/7Ds7/videojs-vjsdownload.git
* Copyright 2024 Apache-2.0 licensed.
*/
(()=>{typeof videojs>"u"&&console.warn("vjsdownload videojs not detected");var l=videojs.getPlugin("plugin"),e=class extends l{defaultOptions={beforeElement:"fullscreenToggle",textControl:"Download video",name:"downloadButton",downloadURL:null};options;constructor(o,n){super(o,n),this.options={...this.defaultOptions,...n},o.addClass("vjs-download"),this.on(o,"ready",function(){let t=videojs.getComponent("Button"),d=new t(o,{className:"vjs-download",controlText:"Download",clickHandler:this.handleClick});o.getChild("ControlBar").el().insertBefore(d.el(),o.controlBar.getChild(this.options.beforeElement).el())})}handleClick(o){let n=this.player().vjsdownload()?.options.downloadURL||this.player().currentSource().src;window.open(n,"Download"),this.player().trigger("downloadvideo")}};videojs.registerPlugin("vjsdownload",e);})();
