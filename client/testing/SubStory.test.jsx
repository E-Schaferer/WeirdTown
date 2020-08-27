import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubStory from '../components/SubStory';

configure({ adapter: new Adapter() });

describe('substory tests', () => {
  it('should render', () => {
    const wrapper = shallow(<SubStory />);
    expect(wrapper).toBeTruthy();
  });
});
