import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

export const authGet = (props, email) => {
  const { handleUserData, handleError } = props;

  Axios.get(`/userdata?user=${email}`)
    .then((result) => {
      handleUserData(result);
    })
    .catch((err) => {
      handleError(['isAuthenticated', err]);
    });
};
authGet.propTypes = {
  handleUserData: PropTypes.func,
  handleError: PropTypes.func,
};
authGet.defaultProps = {
  handleUserData: undefined,
  handleError: undefined,
};

const CurrentUser = (props) => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    authGet(props, user.email);
  }

  return (
    <div>
      { isAuthenticated ? (
        <p id="welcome-user">
          Welcome,
          {' '}
          {user.name}
        </p>
      )
        : <p>No current user</p>}
    </div>
  );
};

export default CurrentUser;
