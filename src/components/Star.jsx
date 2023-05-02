import React from 'react';
import Ratings from './Ratings'; 

const Star = ({ rating }) => {
  return (
    <div>
      
      <Ratings rating={rating} />
    </div>
  );
};

export default Star;
