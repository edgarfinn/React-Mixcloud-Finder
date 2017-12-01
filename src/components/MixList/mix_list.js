import React from 'react';
import mixListItem from '../MixListItem/mix_list_item';

const MixList = (props) => {
  const mixItemList = props.mixes.data.map(mix => {
    return (
      <mixListItem
        mixTitle={mix.name}
        mixUploader={mix.user.name}
        key={mix.url}
      />
    )
  })
  return (
    <ul>{mixItemList}</ul>
  )
}

export default MixList;
