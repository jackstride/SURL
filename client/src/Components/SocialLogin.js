import React, { useState, Fragment } from 'react';

const SocialLogin = () => {
  const [items] = useState([
    {
      name: 'Sign in with Twitter',
      link: '',
      icon: '',
    },
    {
      name: 'Sign in with Github',
      link: '',
      icon: '',
    },
  ]);
  return (
    <div className="social_auth">
      {items.map((item, i) => {
        return <Social data={item} />;
      })}
    </div>
  );
};

export default SocialLogin;

const Social = ({ data }) => {
  return <button className="social">{data.name}</button>;
};
