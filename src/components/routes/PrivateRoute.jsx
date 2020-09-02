import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ userReducer, component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (userReducer.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      ))
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  isAuthenticated: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  isAuthenticated: false,
};

const mapStateToProps = ({ userReducer }) => ({
  userReducer,
});

export default connect(mapStateToProps)(PrivateRoute);
