import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../Actions/authActions';

const ProtectedRoute = ({ loadUser, isAuthenticated, children, ...rest }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const mapDispatchToProps = () => (dispatch) => {
  return {
    loadUser: () => dispatch(loadUser()),
  };
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
