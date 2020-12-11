import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useAuth0 } from '@auth0/auth0-react';
import SignUpButton from '../../components/AuthBar/SignUpButton';

configure({ adapter: new Adapter() });

jest.mock('@auth0/auth0-react');

describe('substory sort tests', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      loginWithRedirect: jest.fn(),
    });
  });
  it('should render', () => {
    const wrapper = shallow(<SignUpButton />);
    expect(wrapper).toBeTruthy();
  });
  it('should call loginWithRedirect when the button is clicked', () => {
    const { loginWithRedirect } = useAuth0();
    const wrapper = shallow(<SignUpButton />);
    wrapper.find('#signup-button').simulate('click');
    expect(loginWithRedirect).toHaveBeenCalled();
  });
});
