import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

const CurrentUser = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const { handleUserData, handleError } = props;

  if (isAuthenticated) {
    Axios.get(`/userdata?user=${user.email}`)
      .then((result) => {
        handleUserData(result);
      })
      .catch((err) => {
        handleError(['isAuthenticated', err]);
      });
  }

  return (
    <div>
      { isAuthenticated ? (
        <p>
          Welcome,
          {' '}
          {user.name}
        </p>
      )
        : <p>No current user</p>}
    </div>
  );
};
CurrentUser.propTypes = {
  handleUserData: PropTypes.func,
  handleError: PropTypes.func,
};
CurrentUser.defaultProps = {
  handleUserData: undefined,
  handleError: undefined,
};

export default CurrentUser;
