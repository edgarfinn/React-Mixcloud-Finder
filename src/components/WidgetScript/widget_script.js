import React from 'react';

export default ({onPause,onPlay}) => {
  return (
    <script
      dangerouslySetInnerHTML={{
      __html: (function() {

      var iFrame = document.getElementById('mix-player');

        var widget = iFrame.contentWindow.parent.Mixcloud.PlayerWidget(iFrame);
        console.log(widget)

        widget.ready.then(function(){
          widget.events.pause.on(function() {
            onPause();
          });
          widget.events.play.on(function() {
            onPlay();
          })
        });
    })()}}

    ></script>
  )
};
