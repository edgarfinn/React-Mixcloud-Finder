import React from 'react';
import './mix_embed.css';

const MixEmbed = ({mix}) => {
  const userName = mix.user.username;
  const encodedMixName = mix.url.split('/')[mix.url.split('/').length - 2];

  const encodedUrl = "https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&hide_artwork=1&autoplay=1&feed=%2F" + userName + "%2F" + encodedMixName + "%2F";

  return (
    <div>
      <iframe id="mix-player" title={encodedUrl} className="embed-iframe" src={encodedUrl} frameBorder="0"></iframe>
    </div>
  )
}

export default MixEmbed;
