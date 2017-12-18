import React from 'react';
import './now_playing_cassette.css';

export default ({title, playing}) => {

  const Teeth = ()=> {
    const Tooth = ({position}) => {
      const toothStyle = {
        transform: 'rotate('+position.toString()+'deg)'
      }
      return (
        <i className="wheel-tooth" style={toothStyle}></i>
      )
    }
    let toothList = [];
    while(toothList.length < 6) {
      toothList.push( <Tooth key={toothList.length} position={60*toothList.length}/> );
    }
      return toothList;
  }
  const MixTitle = ({title}) => {
    return (
      <header className="header-now-playing">
        <h3 className="title-now-playing nowrap">{title}</h3>
      </header>
    )
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
        {title && <MixTitle title={title} />}
      </div>
      <div className="label-main">
        <div className="wheels-window-outer">
          <div className="wheel-window wheel-window-left">
            <div className="wheel wheel-left">
              <div className={playing ? "inner-wheel wheel-playing inner-wheel-left" : "inner-wheel inner-wheel-left"} >
                <Teeth />
                <div className="spindle"></div>
              </div>
            </div>
          </div>
          <div className="tape-window-center"></div>
          <div className="wheel-window wheel-window-right">
            <div className="wheel wheel-right">
              <div className={playing ? "inner-wheel wheel-playing inner-wheel-left" : "inner-wheel inner-wheel-left"}>
                <Teeth />
                <div className="spindle"></div>
              </div>
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
};
