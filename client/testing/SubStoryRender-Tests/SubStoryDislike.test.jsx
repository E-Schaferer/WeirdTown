import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAxios from 'jest-mock-axios';
import { useAuth0 } from '@auth0/auth0-react';
import SubStoryDislike from '../../components/SubStoryRender/SubStoryDislike';

configure({ adapter: new Adapter() });

jest.mock('@auth0/auth0-react');

describe('is authenticated tests', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user: {
        email: 'test@email',
      },
    });
  });
  afterEach(() => {
    mockAxios.reset();
  });
  it('should render', () => {
    const wrapper = shallow(<SubStoryDislike />);
    expect(wrapper).toBeTruthy();
  });
  it('should call dislike when a succesful http request is made', () => {
    const test = jest.fn();
    const wrapper = shallow(<SubStoryDislike dislike={test} />);
    wrapper.find('#dislike-click').simulate('click');
    mockAxios.mockResponse();
    expect(test).toHaveBeenCalled();
  });
  it('should call handleError when an unsuccesful http request is made', () => {
    const test = jest.fn();
    const wrapper = shallow(<SubStoryDislike handleError={test} />);
    wrapper.find('#dislike-click').simulate('click');
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
  it('should call the handleUnauthenticated function when the dislike button is clicked but no user is authenticated', () => {
    const test = jest.fn();
    const wrapper = shallow(<SubStoryDislike handleUserError={test} />);
    wrapper.find('#dislike-click').simulate('click');
    expect(test).toHaveBeenCalled();
  });
});
