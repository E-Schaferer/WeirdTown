import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../components/AuthBar/LoginButton';

configure({ adapter: new Adapter() });

jest.mock('@auth0/auth0-react');

describe('substory sort tests', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      loginWithRedirect: jest.fn(),
    });
  });
  it('should render', () => {
    const wrapper = shallow(<LoginButton />);
    expect(wrapper).toBeTruthy();
  });
  it('should call login with redirect when the login button is clicked', () => {
    const { loginWithRedirect } = useAuth0();
    const wrapper = shallow(<LoginButton />);
    wrapper.find('#login-button').simulate('click');
    expect(loginWithRedirect).toHaveBeenCalled();
  });
});
