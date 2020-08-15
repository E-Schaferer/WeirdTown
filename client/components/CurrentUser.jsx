import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

const CurrentUser = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const { handleUserData } = props;

  if (isAuthenticated) {
    Axios.get(`/userdata?user=${user.email}`)
      .then((result) => {
        handleUserData(result);
      })
      .catch((error) => {
        console.log(error);
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
  handleUserData: PropTypes.func.isRequired,
};

export default CurrentUser;
