import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useAuth0 } from '@auth0/auth0-react';
import mockAxios from 'jest-mock-axios';
import CurrentUser, { authGet } from '../components/CurrentUser';

const user = {
  email: 'test@email.com',
  email_verified: true,
  sub: 'google-oauth2|12345678901234',
};
const successSpy = jest.fn();
const handleUserData = successSpy;
const failureSpy = jest.fn();
const handleError = failureSpy;

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
  afterEach(() => {
    mockAxios.reset();
  });
  it('should render', () => {
    const wrapper = shallow(<CurrentUser />);
    expect(wrapper).toBeTruthy();
  });
  it('should sent an http request to userdata when provided with user data', () => {
    const wrapper = shallow(<CurrentUser handleUserData={handleUserData} />);
    mockAxios.mockResponse();
    expect(successSpy).toHaveBeenCalled();
  });
  it('should show the user name if a user is logged in', () => {
    const wrapper = shallow(<CurrentUser />);
    expect(wrapper.find('#welcome-user').exists()).toBeTruthy();
  });
});

describe('authGet fail test', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    });
  });
  afterEach(() => {
    mockAxios.reset();
  });
  it('should call the error handler when authGet receives an error', () => {
    const wrapper = shallow(<CurrentUser handleError={handleError} />);
    mockAxios.mockError();
    expect(failureSpy).toHaveBeenCalled();
  });
});

describe('not authenticated test', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: false,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    });
  });
  it('should not display a name if no user is signed in', () => {
    const wrapper = shallow(<CurrentUser />);
    expect(wrapper.find('#welcome-user').exists()).toBeFalsy();
  });
});
