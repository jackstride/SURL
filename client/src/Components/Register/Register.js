import React from 'react';
import Form from '../Form';
import useForm from '../../hooks/useForm';
import { register } from '../../Actions/authActions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Register = ({ register }) => {
  const [values, handleChange] = useForm();

  const hanldeSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    register(values);
  };

  return (
    <Form handleSubmit={(e) => hanldeSubmit(e)}>
      <p>
        <label htmlFor="username">Name:</label>
        <input
          placeholder="James"
          onChange={handleChange}
          type="text"
          value={values.username || ''}
          name="username"
        ></input>
        <FontAwesomeIcon icon="user" color="black" size="xs" />
      </p>
      <p>
        <label htmlFor="email">Email:</label>
        <input
          placeholder="your@email.co.uk"
          onChange={handleChange}
          type="text"
          value={values.email || ''}
          name="email"
        ></input>
        <FontAwesomeIcon icon="envelope" color="black" size="xs" />
      </p>
      <p>
        <label htmlFor="password">Password:</label>
        <input
          placeholder="***************"
          onChange={handleChange}
          type="password"
          value={values.password || ''}
          name="password"
        ></input>
        <FontAwesomeIcon icon="lock" color="black" size="xs" />
      </p>
      <p></p>
      <input type="submit"></input>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (values) => dispatch(register(values)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
