import React from 'react';
import './now_playing_cassette.css';

const NowPlayingCassette = () => {

  const Teethe = ()=> {
    const Tooth = () => {
      return (
        <div className="wheel-tooth"></div>
      )
    }
    let toothList = [];
    while(toothList.length < 6) {
      toothList.push( <Tooth key={toothList.length} position={(360/(toothList.length)+1)}/> );
    }
      return toothList;
  }

  return (
    <div className="tape">
      <div className="wing wing-left"></div>
      <div className="wing wing-right"></div>
      <div className="screw screw-top screw-left"></div>
      <div className="screw screw-top screw-right"></div>
      <div className="label-top">
        <div className="top-label-corner label-corner-left"></div>
        <div className="top-label-corner label-corner-right"></div>
      </div>
      <div className="label-main">
        <div className="wheels-window-outer">
          <div className="wheel-window wheel-window-left">
            <div className="wheel wheel-left">
            </div>
          </div>
          <div className="tape-window-center"></div>
          <div className="wheel-window wheel-window-right">
            <div className="wheel wheel-right">
              <Teethe />
            </div>
          </div>
        </div>
      </div>
      <div className="mech-panel">
        <div className="mech-panel-corner mech-corner-left"></div>
        <div className="mech-hole mech-middle-hole mech-hold-round"></div>
        <div className="mech-hole round-hole-large mech-hold-round round-hole-left"></div>
        <div className="mech-hole square-hole square-hole-left"></div>
        <div className="mech-hole square-hole square-hole-right"></div>
        <div className="mech-hole round-hole-large mech-hold-round round-hole-right"></div>
        <div className="mech-panel-corner mech-corner-right"></div>
      </div>
      <div className="screw screw-bottom screw-left"></div>
      <div className="screw screw-bottom screw-right"></div>
    </div>
  )
}

export default NowPlayingCassette;
