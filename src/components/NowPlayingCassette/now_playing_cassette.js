import React from 'react';
import './now_playing_cassette.css';

const NowPlayingCassette = () => {
  return (
    <div class="tape">
      <div class="wing wing-left"></div>
      <div class="wing wing-right"></div>
      <div class="screw screw-top screw-left"></div>
      <div class="screw screw-top screw-right"></div>
      <div class="label-top">
        <div class="top-label-corner label-corner-left"></div>
        <div class="top-label-corner label-corner-right"></div>
      </div>
      <div class="label-main">
        <div class="wheels-window-outer">
          <div class="wheel-window wheel-window-left">
            <div class="wheel wheel-left"></div>
          </div>
          <div class="tape-window-center"></div>
          <div class="wheel-window wheel-window-right">
            <div class="wheel wheel-right"></div>
          </div>
        </div>
      </div>
      <div class="mech-panel"></div>
      <div class="screw screw-bottom screw-left"></div>
      <div class="screw screw-bottom screw-right"></div>
    </div>
  )
}

export default NowPlayingCassette;
