import React from 'react';

const Ratings = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i className="fas fa-star" key={i}></i>);
    } else {
      stars.push(<i className="far fa-star" key={i}></i>);
    }
  }

  return <div>{stars}</div>;
};

export default Ratings;
