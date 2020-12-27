import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StoryButtonClick from '../../components/AbsentStory/StoryButtonClick';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('placeholder', () => {
    expect(true);
  });
  // it('should render', () => {
  //   const wrapper = shallow(<StoryButtonClick />);
  //   expect(wrapper).toBeTruthy();
  // });
});
