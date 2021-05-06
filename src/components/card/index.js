import React from 'react';
import './card.css';

const Card = ({ offer }) => {
  const { title, timePosted, location, city, description } = offer;
  return (
    <>
      <div className="card-container">
        <div className="card-title-container">
          <span className="card-title">{title}</span>
          <span className="card-time">{timePosted}</span>
        </div>
        <div>
          <span
            className="card-location"
            style={{ paddingRight: '21px' }}
          >
            {location}
          </span>
          <span className="card-location" style={{ opacity: 0.6 }}>
            {city}
          </span>
        </div>
        <div className="card-desc">{description}</div>
        <button className="card-navigation-btn">
          <span className="btn-label">{'>'}</span>
        </button>
      </div>
      <div className="card-border" />
    </>
  );
};

export default Card;
