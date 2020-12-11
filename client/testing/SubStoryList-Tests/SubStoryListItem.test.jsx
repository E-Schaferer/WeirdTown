import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAxios from 'jest-mock-axios';
import SubStoryListItem from '../../components/SubStoryList/SubStoryListItem';

configure({ adapter: new Adapter() });

describe('substory list item tests', () => {
  afterEach(() => {
    mockAxios.reset();
  });
  it('should render', () => {
    const subs = [
      {
        id: 1,
        subname: 'test1',
      },
      {
        id: 2,
        subname: 'test2',
      },
    ];
    const wrapper = shallow(<SubStoryListItem subs={subs} />);
    expect(wrapper).toBeTruthy();
  });
  it('should invoke handleListClick on a succesful http request after clicking on a sub story list item', () => {
    const test = jest.fn();
    const getAttribute = jest.fn();
    const subs = [
      {
        id: 1,
        subname: 'test1',
      },
      {
        id: 2,
        subname: 'test2',
      },
    ];
    const wrapper = shallow(<SubStoryListItem handleListClick={test} subs={subs} />);
    getAttribute.mockReturnValueOnce(subs[0].id);
    wrapper.find('#sub-item-1').simulate('click', {
      target: {
        getAttribute,
      },
    });
    mockAxios.mockResponse();
    expect(test).toHaveBeenCalled();
  });
  it('should invoke handle error on an unsuccesful http request after clicking on a sub story list item', () => {
    const test = jest.fn();
    const getAttribute = jest.fn();
    const subs = [
      {
        id: 1,
        subname: 'test1',
      },
      {
        id: 2,
        subname: 'test2',
      },
    ];
    const wrapper = shallow(<SubStoryListItem handleError={test} subs={subs} />);
    getAttribute.mockReturnValueOnce(subs[0].id);
    wrapper.find('#sub-item-1').simulate('click', {
      target: {
        getAttribute,
      },
    });
    mockAxios.mockError();
    expect(test).toHaveBeenCalled();
  });
});
