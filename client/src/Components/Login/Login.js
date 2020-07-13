import React, { useState, Fragment, useEffect } from 'react';
import Form from '../Form';
import useForm from '../../hooks/useForm';
import { connect } from 'react-redux';
import { user_login } from '../../Actions/authActions';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = ({ login, isAuth }) => {
  const history = useHistory();
  useEffect(() => {
    if (isAuth) {
      history.push('/app');
    }
  }, [isAuth, history]);

  const [values, handleChange] = useForm();
  const [hasUsername, sethasUsername] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values);
  };

  let handleLoginInput = (e) => {
    handleChange(e);
    e.target.value.includes('@') ? sethasUsername(true) : sethasUsername(false);
  };

  useEffect(() => {
    let items = document.querySelectorAll('.hide');
    if (hasUsername) {
      items.forEach((item) => {
        item.classList.remove('hide');
      });
    }
  }, [hasUsername]);
  return (
    <Form handleSubmit={(e) => handleSubmit(e)}>
      <p>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => {
            handleChange(e);
            handleLoginInput(e);
          }}
          type="text"
          value={values.email || ''}
          name="email"
        ></input>
        <FontAwesomeIcon icon="envelope" color="black" size="xs" />
      </p>
      <p className="hide">
        <label className="hide" htmlFor="password">
          Password
        </label>
        <input
          className="hide"
          onChange={handleChange}
          type="password"
          value={values.password || ''}
          name="password"
        ></input>
        <FontAwesomeIcon icon="lock" color="black" size="xs" />
      </p>
      <input className="hide" value="Sign in" type="submit"></input>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (values) => dispatch(user_login(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
