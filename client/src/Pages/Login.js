import React from 'react';
import { Link } from 'react-router-dom';
import LoginComp from '../Components/Login/Login';
import Logo from '../images/surlsquare.png';
import SocialLogin from '../Components/SocialLogin';

const Login = () => {
  return (
    <div className="desktop_container">
      <div className="login_container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="SURL Logo" />
          </Link>
        </div>
        <LoginComp />
        <p style={{ fontStyle: 'italics' }}>Or</p>
        <SocialLogin />
        <h4>
          Register for an account <Link to="/register">Here</Link>
        </h4>
      </div>
    </div>
  );
};

export default Login;
