import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../Actions/authActions';

const Logout = ({ logout }) => {
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const mapDispatchToProps = () => (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
