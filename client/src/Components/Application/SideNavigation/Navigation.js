import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [sections] = useState([
    {
      name: '',
      icon: 'link',
      link: '/app',
    },
    {
      name: '',
      icon: 'user',
      link: '/app/profile',
    },
  ]);
  return (
    <div className="navigation_container">
      <div className="user_icon flex_center">
        <div className="icon"></div>
      </div>
      {sections.map((item, i) => (
        <div key={i} className="navigation_item flex_center">
          <NavLink activeClassName="app_active" exact to={item.link}></NavLink>
          <div className="icon">
            <FontAwesomeIcon icon={item.icon} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
