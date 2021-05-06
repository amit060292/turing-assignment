import React from 'react';
import icon from '../../icon-briefcase.svg';
import './footer.css';

const Button = ({ name }) => {
  return (
    <div className="footer-link">
      <button className="footer-btn">
        <img src={icon} className="footer-icon" />
      </button>
      <span className="footer-name">{name}</span>
    </div>
  );
};

export default Button;
