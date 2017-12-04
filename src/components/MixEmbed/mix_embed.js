import React from 'react';
import './mix_embed.css';

const formatEmbedUrl = url =>
url.replace("https://www","https://api")+"embed-html";

// const testUrls = url => url.replace("https://www.mixcloud.com", "")


const MixEmbed = ({mix}) => {
  // console.log(testUrls(mix.url));
  console.log('mix: ',mix);

  return (
    <div className="mix-embed">
      <iframe className="iframe-player"
        src={formatEmbedUrl(mix.url)}
        ></iframe>
    </div>
  )
}

export default MixEmbed;
