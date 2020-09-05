import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useAuth0 } from '@auth0/auth0-react';
import CurrentUser from '../components/CurrentUser';

const user = {
  email: 'test@email.com',
  email_verified: true,
  sub: 'google-oauth2|12345678901234',
};

const props = {
  handleUserData: jest.fn(),
  handleError: jest.fn(),
};

jest.mock('@auth0/auth0-react');

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    });
  });
  it('should render', () => {
    const wrapper = shallow(<CurrentUser />);
    expect(wrapper).toBeTruthy();
  });
  /*
  it('should sent an http request to userdata when provided with user data', () => {
    const wrapper = shallow(<CurrentUser
      handleUserData={props.handleUserData}
      handleError={props.handleError}
    />);
    expect(wrapper.props().handleError).toHaveBeenCalled();
  });
  */
});
