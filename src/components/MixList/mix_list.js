import React from 'react';
import './mix_list.css';
import MixListItem from '../MixListItem/mix_list_item';

const MixList = ({mixes, onMixSelect}) => {
  if (mixes.length > 0) {
    const mixItemList = mixes.data.map((mix, index, array) => {
      return (
        <div key={mix.url}>
          <MixListItem
            mix={mix}
            onMixSelect={onMixSelect}
            lastInList={index === array.length - 1}/>
        </div>
      )
    })

    console.log(mixItemList);
    return (
      <ul className="list-tape-rack">
        {mixItemList}
      </ul>
    )
  } else {
    return (
      <ul className="list-tape-rack">
      </ul>
    )
  }

}

export default MixList;
