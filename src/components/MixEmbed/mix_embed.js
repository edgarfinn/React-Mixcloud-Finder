import React, {Component} from 'react';
import './mix_embed.css';

export default class MixEmbed extends Component {

  render() {

    const userName = this.props.mix.user.username;
    const encodedMixName = this.props.mix.url.split('/')[this.props.mix.url.split('/').length - 2];

    const encodedUrl = "https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&hide_artwork=1&autoplay=1&feed=%2F" + userName + "%2F" + encodedMixName + "%2F";

    return (
      <div>
        <iframe
          id="mix-player"
          title={encodedUrl}
          className="embed-iframe"
          width="100%"
          height="220px"
          src={encodedUrl}
          frameBorder="0"
          onLoad= { () => {
            this.props.onIframeLoad();
          }}
          ></iframe>
      </div>
    )
  }
}
