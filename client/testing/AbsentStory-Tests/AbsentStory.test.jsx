import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AbsentStory from '../../components/AbsentStory/AbsentStory';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const wrapper = shallow(<AbsentStory />);
    expect(wrapper).toBeTruthy();
  });
  it('should not render storySubmissionPrompt based on state of App', () => {
    const wrapper = shallow(<AbsentStory storySubmissionPrompt={false} />);
    expect(wrapper.find('#submission-prompt').exists()).toBeFalsy();
  });
  it('should render storySubmissionPrompt based on state of App', () => {
    const wrapper = shallow(<AbsentStory storySubmissionPrompt />);
    expect(wrapper.find('#submission-prompt').exists()).toBeTruthy();
  });
  it('should not render storyFormZone based on state of App', () => {
    const wrapper = shallow(<AbsentStory storyFormZone={false} />);
    expect(wrapper.find('#story-form-zone').exists()).toBeFalsy();
  });
  it('should render storyFormZone based on state of App', () => {
    const wrapper = shallow(<AbsentStory storyFormZone />);
    expect(wrapper.find('#story-form-zone').exists()).toBeTruthy();
  });
});
