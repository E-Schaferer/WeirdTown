import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';

configure({ adapter: new Adapter() });

describe('app tests', () => {
  const docWrapper = mount(<App />, { attachTo: document.body });
  it('should render', () => {
    expect(docWrapper).toBeTruthy();
  });
  it('should update absentStoryRender and presentStoryRender when handleLocationClick runs, and to properly add input location to state', () => {
    docWrapper.setState({
      absentStoryRender: false,
      presentStoryRender: false,
    });
    docWrapper.instance().handleLocationClick([100, 50]);
    expect(docWrapper.instance().state.lastMarker).toContain(100);
    expect(docWrapper.instance().state.absentStoryRender).toBe(true);
    expect(docWrapper.instance().state.presentStoryRender).toBe(false);
  });
  it('should not render elements before buttons rendering them are clicked', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('#auth-zone').exists()).toBeTruthy();
    expect(wrapper.find('#map-zone').exists()).toBeTruthy();
    expect(wrapper.find('#absent-story').exists()).toBeFalsy();
    expect(wrapper.find('#present-story').exists()).toBeFalsy();
  });
  it('should render elements after buttons rendering them are clicked', () => {
    const wrapper = mount(<App />);
    wrapper.instance().handleLocationClick([100, 50]);
    wrapper.update();
    expect(wrapper.instance().state.absentStoryRender).toBe(true);
    expect(wrapper.find('#absent-story').exists()).toBeTruthy();
    expect(wrapper.find('#present-story').exists()).toBeFalsy();
  });
  it('should update state after onShowSub resolves', () => {
    const wrapper = mount(<App />);
    wrapper.instance().onShowSub();
    wrapper.update();
    expect(wrapper.instance().state.subStory).toBe(true);
    expect(wrapper.instance().state.subStoryList).toBe(true);
    expect(wrapper.instance().state.subStoryListButtonFlex).toBe(true);
    expect(wrapper.instance().state.subStoryButton).toBe(true);
    expect(wrapper.instance().state.subStoryPrompt).toBe(false);
  });
  it('should update state after onShowSubStories resolves', () => {
    const wrapper = mount(<App />);
    wrapper.instance().onShowSubStories();
    wrapper.update();
    expect(wrapper.instance().state.subStoryListZone).toBe(true);
    expect(wrapper.instance().state.subStorySubList).toBe(true);
    expect(wrapper.instance().state.subStoryList).toBe(false);
    expect(wrapper.instance().state.subStoryListButtonFlex).toBe(false);
    expect(wrapper.instance().state.subStoryRenderZone).toBe(false);
  });
  it('should update state after onShowSubForm resolves', () => {
    const wrapper = mount(<App />);
    wrapper.instance().onShowSubForm();
    wrapper.update();
    expect(wrapper.instance().state.subStoryForm).toBe(true);
    expect(wrapper.instance().state.subStoryButton).toBe(false);
  });
  it('should update state after onSubStoryListItemClick resolves', () => {
    const wrapper = mount(<App />);
    wrapper.instance().onSubStoryListItemClick();
    wrapper.update();
    expect(wrapper.instance().state.subStoryRenderZone).toBe(true);
    expect(wrapper.instance().state.subStorySubList).toBe(false);
  });
  it('should update state after onGoBack revolves', () => {
    const wrapper = mount(<App />);
    wrapper.instance().onGoBack();
    wrapper.update();
    expect(wrapper.instance().state.subStorySubList).toBe(true);
    expect(wrapper.instance().state.subStoryRenderZone).toBe(false);
  });
  it('should update state after storyFormRender resolves', () => {
    const wrapper = mount(<App />);
    wrapper.instance().storyFormRender();
    wrapper.update();
    expect(wrapper.instance().state.storyFormZone).toBe(true);
    expect(wrapper.instance().state.storySubmissionPrompt).toBe(false);
  });
});
