  
import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      loading ? (
          <div className="text-center text-red-500">
              <p>oops! you are not authenticated. Please, <span><Link className="text-blue-400" to='/login'>Login</Link> </span>or <span><Link className="text-blue-400" to='/register'>Register</Link> </span>first!</p>
          </div>
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);