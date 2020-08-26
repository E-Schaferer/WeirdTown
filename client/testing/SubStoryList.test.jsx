import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubStoryList from '../components/SubStoryList';

configure({ adapter: new Adapter() });

describe('substory list tests', () => {
  it('should render', () => {
    const wrapper = shallow(<SubStoryList />);
    expect(wrapper).toBeTruthy();
  });
});
