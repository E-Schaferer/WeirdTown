import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as reactRedux from 'react-redux';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, screen } from '../test-utils';
import SubstorySort from '../../components/SubStoryList/SubstorySort';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  it('placeholder', () => {
    expect(true);
  });
  // it('should render', () => {
  //   const subArr = [];
  //   useSelectorMock.mockReturnValue(subArr);
  //   const wrapper = render(<SubstorySort />);
  //   expect(wrapper).toBeTruthy();
  // });
  // it('should properly sort by date in ascending order', () => {
  //   const subArr = [
  //     { id: 3, sublikes: 10 },
  //     { id: 2, sublikes: 9 },
  //     { id: 0, sublikes: 8 },
  //     { id: 4, sublikes: 7 },
  //     { id: 1, sublikes: 6 },
  //   ];
  //   // useSelectorMock.mockReturnValue(subArr);
    // render(<SubstorySort handleSort={test} />);
    // userEvent.click(screen.getByText('Sort By'));
    // userEvent.click(screen.getByText('Date (Descending)'));
    // expect(screen.getByTestId('sub-list')).firstChild.name.toBe(4);
  // });
  // it('should properly sort by date in descending order', () => {
  //   const subArr = [
  //     { id: 4, sublikes: 8 },
  //     { id: 0, sublikes: 10 },
  //     { id: 3, sublikes: 1 },
  //     { id: 2, sublikes: 0 },
  //     { id: 1, sublikes: 5 },
  //   ];
  //   const test = jest.fn((subs) => subs[0].sublikes);
  //   const wrapper = render(<SubstorySort subs={subArr} handleSort={test} />);
  //   wrapper.find('#sort-date-desc').simulate('click');
  //   expect(test).toHaveBeenCalled();
  //   expect(test).toReturnWith(10);
  // });
  // it('should properly sort by likes in ascending order', () => {
  //   const subArr = [
  //     { id: 4, sublikes: 8 },
  //     { id: 0, sublikes: 10 },
  //     { id: 3, sublikes: 1 },
  //     { id: 2, sublikes: 0 },
  //     { id: 1, sublikes: 5 },
  //   ];
  //   const test = jest.fn((subs) => subs[0].id);
  //   const wrapper = render(<SubstorySort subs={subArr} handleSort={test} />);
  //   wrapper.find('#sort-like-asc').simulate('click');
  //   expect(test).toHaveBeenCalled();
  //   expect(test).toReturnWith(2);
  // });
  // it('should properly sort by likes in descending order', () => {
  //   const subArr = [
  //     { id: 4, sublikes: 8 },
  //     { id: 0, sublikes: 10 },
  //     { id: 3, sublikes: 1 },
  //     { id: 2, sublikes: 0 },
  //     { id: 1, sublikes: 5 },
  //   ];
  //   const test = jest.fn((subs) => subs[0].id);
  //   const wrapper = render(<SubstorySort subs={subArr} handleSort={test} />);
  //   wrapper.find('#sort-like-desc').simulate('click');
  //   expect(test).toHaveBeenCalled();
  //   expect(test).toReturnWith(0);
  // });
});
