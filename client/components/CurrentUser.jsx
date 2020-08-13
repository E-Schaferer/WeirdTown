import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Axios from 'axios';

const CurrentUser = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {

  };

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

export default CurrentUser;
