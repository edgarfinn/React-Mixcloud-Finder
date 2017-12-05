import React from 'react';
import './mix_list.css';
import MixListItem from '../MixListItem/mix_list_item';
import EmptyRack from '../EmptyRack/empty_rack';

const MixList = ({mixes, onMixSelect}) => {

  if (mixes.data) {
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
      return (
        <ul className="list-tape-rack">
          {mixItemList}
        </ul>
      )
  }
  else {
    console.log('list is empty');
    return (
      <ul className="list-tape-rack">
        <EmptyRack />
      </ul>
    )
  }

}

export default MixList;
