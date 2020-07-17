import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifySocialAuth } from '../Actions/authActions';

const Redirect = ({ isAuthenticated, verifySocialAuth }) => {
  const history = useHistory();

  useEffect(() => {
    verifySocialAuth();
  }, [verifySocialAuth]);

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/app');
    } else {
      history.push('/login');
    }
  }, [isAuthenticated, history]);

  return (
    <div>
      <h2> Redireting you</h2>
    </div>
  );
};

const mapDispatchToProps = () => (dispatch) => {
  return {
    verifySocialAuth: () => dispatch(verifySocialAuth()),
  };
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Redirect);
