import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubStory from '../../components/SubStory/SubStory';

configure({ adapter: new Adapter() });

describe('substory tests', () => {
  it('should render', () => {
    const wrapper = shallow(<SubStory />);
    expect(wrapper).toBeTruthy();
  });
  it('should render the substory list if substory list is passed as true as a prop', () => {
    const wrapper = shallow(<SubStory subStoryList />);
    expect(wrapper.find('#substory-list').exists()).toBeTruthy();
    expect(wrapper.find('#substory-list-button-flex-zone').exists()).toBeFalsy();
  });
  it('should render a unique message based on the number of substories (1)', () => {
    const wrapper = shallow(<SubStory subStoryList subNum={1} />);
    expect(wrapper.find('#one-addendum').exists()).toBeTruthy();
    expect(wrapper.find('#multiple-addendums').exists()).toBeFalsy();
  });
  it('should render a unique message based on the number of substories (more than 1)', () => {
    const wrapper = shallow(<SubStory subStoryList subNum={3} />);
    expect(wrapper.find('#multiple-addendums').exists()).toBeTruthy();
    expect(wrapper.find('#one-addendum').exists()).toBeFalsy();
  });
  it('should render the substory list button if substorylistbuttonflex is passed as true as a prop', () => {
    const wrapper = shallow(<SubStory subStoryListButtonFlex />);
    expect(wrapper.find('#substory-list-button-flex-zone').exists()).toBeTruthy();
    expect(wrapper.find('#substory-list-zone').exists()).toBeFalsy();
  });
  it('should render the substory list if subStoryListZone is passed as true as a prop', () => {
    const wrapper = shallow(<SubStory subStoryListZone />);
    expect(wrapper.find('#substory-list-zone').exists()).toBeTruthy();
    expect(wrapper.find('#sub-story-button').exists()).toBeFalsy();
  });
  it('should render the subStoryButton if subStoryButton is passed as true as a prop', () => {
    const wrapper = shallow(<SubStory subStoryButton />);
    expect(wrapper.find('#sub-story-button').exists()).toBeTruthy();
    expect(wrapper.find('#sub-story-form').exists()).toBeFalsy();
  });
  it('should render the subStoryForm if subStoryForm is passed as true as a prop', () => {
    const wrapper = shallow(<SubStory subStoryForm />);
    expect(wrapper.find('#sub-story-form').exists()).toBeTruthy();
    expect(wrapper.find('#substory-list').exists()).toBeFalsy();
  });
});
