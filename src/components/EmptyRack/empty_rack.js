import React from 'react';
import './empty_rack.css';

const EmptyRack = () => {
  let rackContainer = [];
  while(rackContainer.length < 20) {
    const EmptyUnit =
    <li key={rackContainer.length} className="empty-unit">
        <div className="empty-spacer">
          <div className="empty-ridge empty-ridge-left"></div>
          <div className="empty-ridge empty-ridge-right"></div>
        </div>
    </li>;
    rackContainer.push(EmptyUnit);
  }
  return (rackContainer);
}

export default EmptyRack;
