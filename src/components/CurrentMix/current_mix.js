import React from 'react';
import './current_mix.css';
import NowPlayingCassette from '../NowPlayingCassette/now_playing_cassette'

const CurrentMix = ({title}) => {
  return (
    <NowPlayingCassette title={title}/>
  )
}

export default CurrentMix;
