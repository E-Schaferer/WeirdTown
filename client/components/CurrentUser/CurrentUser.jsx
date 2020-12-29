import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

// refactor this component to be able to make use of useDispatch

export const authGet = (props, email) => {
  const { handleUserData } = props;

  Axios.get(`/userdata?user=${email}`)
    .then((result) => {
      handleUserData(result);
    })
    .catch((err) => {
      console.log(['isAuthenticated', err]);
    });
};

authGet.propTypes = {
  handleUserData: PropTypes.func,
};
authGet.defaultProps = {
  handleUserData: undefined,
};

const CurrentUser = (props) => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    authGet(props, user.email);
  }

  return (
    <div>
      { isAuthenticated ? (
        <p>
          Welcome,
          {' '}
          {user.name}
        </p>
      ) : <p>No current user</p>}
    </div>
  );
};

export default CurrentUser;
