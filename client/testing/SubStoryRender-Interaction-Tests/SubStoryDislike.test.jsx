import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubStoryDislike from '../../components/SubStoryRender-Interactions/SubStoryDislike';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const wrapper = shallow(<SubStoryDislike />);
    expect(wrapper).toBeTruthy();
  });
});
