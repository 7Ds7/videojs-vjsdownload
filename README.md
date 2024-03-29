# videojs-vjsdownload

Adds a button to download the video inside the player

## Demo
https://7ds7.github.io/videojs-vjsdownload/demo

or

https://codepen.io/binaryunit/pen/xxedpwp


## Usage
Include the plugin files

* videojs-vjsdownload.js
* videojs-vjsdownload.css

also available trough ```npm install videojs-vjsdownload```


```
var player = videojs(document.querySelector('.video-js'), {
  plugins: {
    vjsdownload:{
      beforeElement: 'playbackRateMenuButton',
      textControl: 'Download video',
      name: 'downloadButton',
      downloadURL: 'https://video_url.mp4' //optional if you need a different download url than the source
    }
  }
} , function() {
  console.log('Callback video-js initiated');
  this.on('downloadvideo', function(){
    console.log('downloadvideo triggered');
  });
});
```

## Options
 * beforeElement: name of the player.controlBar component for the button to be attached before (default:  fullscreenMenuToggle)
 * textControl: String for the controlText (default: 'Download Video')
 * name: name of the DownloadButton component (default: 'downloadButton')
 * downloadURL: oprional file to download (default: null)

## Style
By default the download icon is a clip path, to include a custom icon please refer to videojs-vjsdownload.css file
