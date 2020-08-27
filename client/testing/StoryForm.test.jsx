import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StoryForm from '../components/StoryForm';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const wrapper = shallow(<StoryForm />);
    expect(wrapper).toBeTruthy();
  });
});
