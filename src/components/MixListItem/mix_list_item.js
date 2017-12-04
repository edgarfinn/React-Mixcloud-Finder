import React from 'react';
import './mix_list_item.css'
import Spacer from '../Spacer/spacer';

const MixListItem = ({mix, onMixSelect, lastInList}) => {
  const title = mix.name.length > 34 ? mix.name.substr(0,34)+"...": mix.name;
  return (
    <li className="mix-list-item">
      <div
        className="mix-cassette-item"
        onClick={() => onMixSelect(mix)}
        >
        <h3 className="mix-title">{title}</h3>
        <p className="username">Uploaded by {mix.user.name}</p>
      </div>

      {!lastInList &&
        <Spacer />
      }
    </li>
  )
}

export default MixListItem;
