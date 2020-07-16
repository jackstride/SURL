import React, { useState } from 'react';

const SocialLogin = () => {
  const [items] = useState([
    {
      name: 'Sign in with Twitter',
      link: 'http://localhost:5000/auth/twitter',
      icon: '',
    },
    // {
    //   name: 'Sign in with Github',
    //   link: '',
    //   icon: '',
    // },
  ]);
  return (
    <div className="social_auth">
      {items.map((item, i) => {
        return <Social key={i} data={item} />;
      })}
    </div>
  );
};

export default SocialLogin;

const Social = ({ data }) => {
  return (
    <button
      onClick={() => {
        window.location.href = data.link;
      }}
      className="social"
    >
      {data.name}
    </button>
  );
};
