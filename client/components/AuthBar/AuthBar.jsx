import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Nav className="justify-content-end">
      {isAuthenticated ? <div><LogoutButton /></div>
        : <div><LoginButton /></div>}
    </Nav>
  );
};

export default AuthNav;
