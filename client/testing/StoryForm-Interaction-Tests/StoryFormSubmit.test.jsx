import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StoryFormSubmit from '../../components/StoryForm-Interactions/StoryFormSubmit';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const wrapper = shallow(<StoryFormSubmit />);
    expect(wrapper).toBeTruthy();
  });
});
