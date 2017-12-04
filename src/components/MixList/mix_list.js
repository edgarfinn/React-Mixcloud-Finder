import React from 'react';
import './mix_list.css';
import MixListItem from '../MixListItem/mix_list_item';

const MixList = (props) => {
  const mixItemList = props.mixes.data.map((mix, index,array) => {
    return (
      <div key={mix.url}>
        <MixListItem
          mix={mix}
          onMixSelect={props.onMixSelect}
          lastInList={index === array.length-1}
        />
      </div>
    )
  })

  return (
    <ul className="list-tape-rack">
      {mixItemList}
    </ul>
  )
}

export default MixList;
