import React from 'react';
import './current_mix.css';
import NowPlayingCassette from '../NowPlayingCassette/now_playing_cassette'

const CurrentMix = ({title, playing}) => {
  return (
    <NowPlayingCassette title={title} playing={playing}/>
  )
}

export default CurrentMix;
