import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../../components/AuthBar-Interactions/LogoutButton';

configure({ adapter: new Adapter() });

jest.mock('@auth0/auth0-react');

describe('substory sort tests', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      logout: jest.fn(),
    });
  });
  it('should render', () => {
    const wrapper = shallow(<LogoutButton />);
    expect(wrapper).toBeTruthy();
  });
  it('should call the logout function when the button is clicked', () => {
    const { logout } = useAuth0();
    const wrapper = shallow(<LogoutButton />);
    wrapper.find('#logout-button').simulate('click');
    expect(logout).toHaveBeenCalled();
  });
});
