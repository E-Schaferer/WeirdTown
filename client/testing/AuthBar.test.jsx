import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useAuth0 } from '@auth0/auth0-react';
import AuthBar from '../components/AuthBar';

configure({ adapter: new Adapter() });

jest.mock('@auth0/auth0-react');

describe('Authbar existence tests and logout render test', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
    });
  });
  it('should render', () => {
    const wrapper = shallow(<AuthBar />);
    expect(wrapper).toBeTruthy();
  });
  it('should render the logout button if a user is logged in', () => {
    const wrapper = shallow(<AuthBar />);
    expect(wrapper.find('#logout-button-zone').exists()).toBeTruthy();
    expect(wrapper.find('#login-button-zone').exists()).toBeFalsy();
  });
});

describe('login render test', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: false,
    });
  });
  it('should render the login if a user is logged out', () => {
    const wrapper = shallow(<AuthBar />);
    expect(wrapper.find('#login-button-zone').exists()).toBeTruthy();
    expect(wrapper.find('#logout-button-zone').exists()).toBeFalsy();
  });
});
