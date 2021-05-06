import React from 'react';
import img from './header-image/asset1.png';

import './header.css';

const Header = () => {
  return (
    <div className="header-container">
      <img src={img} className="header-img"></img>
      <div className="header-title">
        <span>Juniors make IT work.</span>
        <span className="subheading">
          Hire and invest in highly skilled juniors now.
        </span>
        <button className="header-btn">Post Offer Now</button>
      </div>
    </div>
  );
};

export default Header;
