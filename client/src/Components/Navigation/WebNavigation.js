import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/surl.svg';

const WebNavigation = () => {
  const [navLinks] = useState([
    {
      name: 'Features',
      link: '/features',
    },
    {
      name: 'About',
      link: '/about',
    },
  ]);
  return (
    <div className="desktop_container">
      <div className="desktop_navigation">
        <div className="image_container">
          <img src={Logo} alt="SURL Logo" />
        </div>
        <nav className="pages_nav">
          <ul>
            {navLinks.map((item, i) => (
              <li>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="sign_nav">
          <ul>
            <li>
              <Link to="/login">Sign in</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default WebNavigation;
