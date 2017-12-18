import React from 'react';
import './empty_rack.css';
import EmptySpacer from '../EmptySpacer/empty_spacer';

export default () => {
  let rackContainer = [];
  while(rackContainer.length < 20) {
    const lastInRack = rackContainer.length > 18;
    const EmptyUnit =
    <li key={rackContainer.length} className="empty-unit">
      {!lastInRack &&
        <EmptySpacer />
      }
    </li>;
    rackContainer.push(EmptyUnit);
  }
  return (rackContainer);
};
