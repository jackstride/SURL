import React from 'react';
import HeaderShape from '../images/main_header.svg';
import WebNavigation from './Navigation/WebNavigation';

const Header = () => {
  return (
    <header>
      <img className="shape" src={HeaderShape} alt="Header Shape" />
      <WebNavigation />
    </header>
  );
};

export default Header;
