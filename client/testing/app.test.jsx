import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';

configure({ adapter: new Adapter() });

describe('app tests', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });
  it('should update absentStoryRender and presentStoryRender when handleLocationClick runs, and to properly add input location to state', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleLocationClick([100, 50]);
    wrapper.update();
    expect(wrapper.instance().state.lastMarker).toContain(100);
    expect(wrapper.instance().state.absentStoryRender).toBe(true);
    expect(wrapper.instance().state.presentStoryRender).toBe(false);
  });
  it('should not render elements before buttons rendering them are clicked', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#auth-zone').exists()).toBeTruthy();
    expect(wrapper.find('#map-zone').exists()).toBeTruthy();
    expect(wrapper.find('#absent-story').exists()).toBeFalsy();
    expect(wrapper.find('#present-story').exists()).toBeFalsy();
  });
  it('should render elements after buttons rendering them are clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleLocationClick([100, 50]);
    wrapper.update();
    expect(wrapper.instance().state.absentStoryRender).toBe(true);
    expect(wrapper.find('#absent-story').exists()).toBeTruthy();
    expect(wrapper.find('#present-story').exists()).toBeFalsy();
  });
  it('should update state after onShowSub resolves', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().onShowSub();
    wrapper.update();
    expect(wrapper.instance().state.subStory).toBe(true);
    expect(wrapper.instance().state.subStoryList).toBe(true);
    expect(wrapper.instance().state.subStoryListButtonFlex).toBe(true);
    expect(wrapper.instance().state.subStoryButton).toBe(true);
    expect(wrapper.instance().state.subStoryPrompt).toBe(false);
  });
  it('should update state after onShowSubStories resolves', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().onShowSubStories();
    wrapper.update();
    expect(wrapper.instance().state.subStoryListZone).toBe(true);
    expect(wrapper.instance().state.subStorySubList).toBe(true);
    expect(wrapper.instance().state.subStoryList).toBe(false);
    expect(wrapper.instance().state.subStoryListButtonFlex).toBe(false);
    expect(wrapper.instance().state.subStoryRenderZone).toBe(false);
  });
  it('should update state after onShowSubForm resolves', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().onShowSubForm();
    wrapper.update();
    expect(wrapper.instance().state.subStoryForm).toBe(true);
    expect(wrapper.instance().state.subStoryButton).toBe(false);
  });
  it('should update state after onSubStoryListItemClick resolves', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().onSubStoryListItemClick();
    wrapper.update();
    expect(wrapper.instance().state.subStoryRenderZone).toBe(true);
    expect(wrapper.instance().state.subStorySubList).toBe(false);
  });
  it('should update state after onGoBack revolves', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().onGoBack();
    wrapper.update();
    expect(wrapper.instance().state.subStorySubList).toBe(true);
    expect(wrapper.instance().state.subStoryRenderZone).toBe(false);
  });
  it('should update state after storyFormRender resolves', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().storyFormRender();
    wrapper.update();
    expect(wrapper.instance().state.storyFormZone).toBe(true);
    expect(wrapper.instance().state.storySubmissionPrompt).toBe(false);
  });
});
