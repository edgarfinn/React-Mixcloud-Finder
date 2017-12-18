import React from 'react';
import './mix_list_item.css'
import Spacer from '../Spacer/spacer';

export default ({mix, onMixSelect, lastInList}) => {
  const title = mix.name.length > 30
    ? mix.name.substr(0, 30) + "..."
    : mix.name;
  return (
    <li className="mix-list-item">
      <div className="mix-cassette-item" onClick={() => onMixSelect(mix, title)}>
        <h3 className="mix-title nowrap">{title}</h3>
        <p className="username">Uploaded by {mix.user.name}</p>
      </div>

      {!lastInList && <Spacer/>
}
    </li>
  )
};
