import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubstorySort from '../../components/SubStoryList-Interactions/SubstorySort';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
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
    const wrapper = shallow(<SubstorySort subs={subs} />);
    expect(wrapper).toBeTruthy();
  });
  it('should properly sort by date in ascending order', () => {
    const subArr = [
      { id: 3, sublikes: 10 },
      { id: 2, sublikes: 9 },
      { id: 0, sublikes: 8 },
      { id: 4, sublikes: 7 },
      { id: 1, sublikes: 6 },
    ];
    const test = jest.fn((subs) => subs[0].sublikes);
    const wrapper = shallow(<SubstorySort subs={subArr} handleSort={test} />);
    wrapper.find('#sort-date-asc').simulate('click');
    expect(test).toHaveBeenCalled();
    expect(test).toReturnWith(7);
  });
  it('should properly sort by date in descending order', () => {
    const subArr = [
      { id: 4, sublikes: 8 },
      { id: 0, sublikes: 10 },
      { id: 3, sublikes: 1 },
      { id: 2, sublikes: 0 },
      { id: 1, sublikes: 5 },
    ];
    const test = jest.fn((subs) => subs[0].sublikes);
    const wrapper = shallow(<SubstorySort subs={subArr} handleSort={test} />);
    wrapper.find('#sort-date-desc').simulate('click');
    expect(test).toHaveBeenCalled();
    expect(test).toReturnWith(10);
  });
  it('should properly sort by likes in ascending order', () => {
    const subArr = [
      { id: 4, sublikes: 8 },
      { id: 0, sublikes: 10 },
      { id: 3, sublikes: 1 },
      { id: 2, sublikes: 0 },
      { id: 1, sublikes: 5 },
    ];
    const test = jest.fn((subs) => subs[0].id);
    const wrapper = shallow(<SubstorySort subs={subArr} handleSort={test} />);
    wrapper.find('#sort-like-asc').simulate('click');
    expect(test).toHaveBeenCalled();
    expect(test).toReturnWith(2);
  });
  it('should properly sort by likes in descending order', () => {
    const subArr = [
      { id: 4, sublikes: 8 },
      { id: 0, sublikes: 10 },
      { id: 3, sublikes: 1 },
      { id: 2, sublikes: 0 },
      { id: 1, sublikes: 5 },
    ];
    const test = jest.fn((subs) => subs[0].id);
    const wrapper = shallow(<SubstorySort subs={subArr} handleSort={test} />);
    wrapper.find('#sort-like-desc').simulate('click');
    expect(test).toHaveBeenCalled();
    expect(test).toReturnWith(0);
  });
});
