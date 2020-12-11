import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAxios from 'jest-mock-axios';
import { useAuth0 } from '@auth0/auth0-react';
import SubStoryLike from '../../components/SubStoryRender/SubStoryLike';

configure({ adapter: new Adapter() });

jest.mock('@auth0/auth0-react');

describe('is authenticated tests', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user: {
        email: 'test@email.com',
      },
    });
  });
  afterEach(() => {
    mockAxios.reset();
  });
  it('should render', () => {
    const wrapper = shallow(<SubStoryLike />);
    expect(wrapper).toBeTruthy();
  });
  it('should call the like prop function when a succesful http request is made', () => {
    const test = jest.fn();
    const wrapper = shallow(<SubStoryLike like={test} />);
    wrapper.find('#like-click').simulate('click');
    mockAxios.mockResponse();
    expect(test).toHaveBeenCalled();
  });
  it('should call handleError when an unsuccesful http request is made', () => {
    const test = jest.fn();
    const wrapper = shallow(<SubStoryLike handleError={test} />);
    wrapper.find('#like-click').simulate('click');
    mockAxios.mockError();
    expect(test).toHaveBeenCalled();
  });
});

describe('is not authenticated tests', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: false,
    });
  });
  it('should call handleUnauthenticated if the user tries to click like but is not authenticated', () => {
    const test = jest.fn();
    const wrapper = shallow(<SubStoryLike handleUserError={test} />);
    wrapper.find('#like-click').simulate('click');
    expect(test).toHaveBeenCalled();
  });
});
