import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubStoryLike from '../../components/SubStoryRender-Interactions/SubStoryLike';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const wrapper = shallow(<SubStoryLike />);
    expect(wrapper).toBeTruthy();
  });
});
