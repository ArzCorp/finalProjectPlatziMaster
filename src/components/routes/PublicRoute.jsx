import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ userReducer, component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
      render={props =>
      !isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={Component} />
      )
    }
  />
);

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

PublicRoute.defaultProps = {
  isAuthenticated: false,
};

const mapStateToProps = ({ userReducer }) => ({
  userReducer,
});

export default connect(mapStateToProps)(PublicRoute);
