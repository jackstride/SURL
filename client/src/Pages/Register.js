import React from 'react';
import RegisterForm from '../Components/Register/Register';
import SocialLogin from '../Components/SocialLogin';
import { Link } from 'react-router-dom';
import RegisterImage from '../images/register_img.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Register = () => {
  return (
    <div className="register_container">
      <div className="register_form">
        <Link to="/">
          <h3>surl.</h3>
        </Link>
        <h2>Sign up.</h2>
        <p>
          Already have an account? Sign in <Link to="/login">Here</Link>
        </p>
        <RegisterForm />
        <SocialLogin />
      </div>
      <div className="second_section">
        <img src={RegisterImage} alt="Register" />
        <div className="register_text">
          <h5>
            With social authenticaiton you can sign into SURL using either
            twitter or github. Pretty neat huh?
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Register;
