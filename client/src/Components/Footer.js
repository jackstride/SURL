import React, { useState } from 'react';
import Logo from '../images/surl_dark.svg';

const Footer = () => {
  const [links] = useState([
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Features',
      link: '/',
    },
    {
      title: 'About',
      link: '/',
    },
    {
      title: 'Report Issues',
      link: '/',
    },
    {
      title: 'Privacy',
      link: '/',
    },
    {
      title: 'Terms & Conditions',
      link: '/',
    },
    {
      title: 'Twitter',
      link: '/',
    },
    {
      title: 'Instagram',
      link: '/',
    },
  ]);
  return (
    <footer>
      <div className="footer_grid">
        <div className="branding">
          <img src={Logo} alt="Logo" />
          <p>A smart a simple tool to manage url's.</p>
        </div>
        <div className="pages">
          {links.splice(0, 3).map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
        <div className="legal">
          {links.splice(0, 3).map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
        <div className="social">
          {links.splice(0, 3).map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
