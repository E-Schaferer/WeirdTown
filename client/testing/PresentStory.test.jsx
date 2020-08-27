import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PresentStory from '../components/PresentStory';

configure({ adapter: new Adapter() });

describe('PresentStory tests', () => {
  it('should render', () => {
    const story = {
      storyId: 'REDACTED',
      story: 'REDACTED',
      storylocation: 'REDACTED',
      storyname: 'REDACTED',
      thingsseen: 'REDACTED',
      thingsheard: 'REDACTED',
    };
    const wrapper = shallow(<PresentStory currentStory={story} />);
    expect(wrapper).toBeTruthy();
  });
});
