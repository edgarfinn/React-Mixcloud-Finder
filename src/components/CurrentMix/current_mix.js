import React from 'react';
import './current_mix.css';
import NowPlayingCassette from '../NowPlayingCassette/now_playing_cassette';

export default ({title, playing, mix}) => {
  return (
    <section className="section-selected-mix large-8">
      <div className="now-playing-wrapper large-12">
        <NowPlayingCassette title={title} playing={playing} />

      </div>
    </section>
  )
}
