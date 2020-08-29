import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAxios from 'jest-mock-axios';
import App from '../components/App';

configure({ adapter: new Adapter() });

describe('app tests', () => {
  afterEach(() => {
    mockAxios.reset();
  });
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
  it('should make an axios request to the correct address after receiving an error', () => {
    const funcName = 'testName';
    const errMsg = 'testMessage';
    App.handleError(funcName, errMsg);
    expect(mockAxios.get).toHaveBeenCalledWith(`/errorLog?funcname=${funcName}&err=${errMsg}`);
  });
  it('should call the correct address when handleLegendGet is Called and update state afterwards', () => {
    const wrapper = shallow(<App />);
    const thenFunc = jest.fn();
    const catchFunc = jest.fn();
    const body = ['test', 'test'];
    wrapper.instance().handleLegendGet(body)
      .then(thenFunc)
      .catch(catchFunc);
    expect(mockAxios.get).toHaveBeenCalledWith(`/locationInfo?lat=${body[0]}&lng=${body[1]}`);
    const response = {
      data: [{
        storyId: 'test',
        story: 'test',
        storylocation: 'test',
        storyname: 'test',
        thingsseen: 'test',
        thingsheard: 'test',
      }],
    };
    mockAxios.mockResponse(response);
    expect(wrapper.instance().state.currentStory.storyId).toEqual('test');
    expect(wrapper.instance().state.absentStoryRender).toEqual(false);
    expect(wrapper.instance().state.storySubmissionPrompt).toEqual(false);
    expect(wrapper.instance().state.storyFormZone).toEqual(false);
    expect(wrapper.instance().state.presentStoryRender).toEqual(true);
    expect(wrapper.instance().state.subStoryPrompt).toEqual(true);
    expect(wrapper.instance().state.subStory).toEqual(false);
    expect(wrapper.instance().state.subStoryList).toEqual(false);
    expect(wrapper.instance().state.subStoryListButtonFlex).toEqual(false);
    expect(wrapper.instance().state.subStoryListZone).toEqual(false);
    expect(wrapper.instance().state.subStoryButton).toEqual(false);
    expect(wrapper.instance().state.subStoryForm).toEqual(false);
    expect(wrapper.instance().state.subStorySubList).toEqual(false);
    expect(wrapper.instance().state.subStoryRenderZone).toEqual(false);
    expect(wrapper.find('#absent-story').exists()).toBeFalsy();
    expect(wrapper.find('#present-story').exists()).toBeTruthy();
  });
  it('should call the correct address when storyFormSubmit is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().state.lastMarker = [0, 1];
    const name = 'test name';
    const loc = 'test loc';
    const saw = 'test saw';
    const heard = 'test heard';
    const story = 'test story';
    wrapper.instance().storyFormSubmit(name, loc, saw, heard, story);
    expect(mockAxios.post).toHaveBeenCalledWith('/storySubmit', {
      heard,
      lat: wrapper.instance().state.lastMarker[0],
      lng: wrapper.instance().state.lastMarker[1],
      loc,
      name,
      saw,
      story,
    });
  });
  it('should call the correct address when subStoryFormSubmit is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().state.currentStory = {
      id: 1,
    };
    const name = 'test sub-name';
    const loc = 'test sub-loc';
    const heard = 'test sub-heard';
    const saw = 'test sub-saw';
    const story = 'test sub-story';
    wrapper.instance().subStoryFormSubmit(name, loc, heard, saw, story);
    expect(mockAxios.post).toHaveBeenCalledWith('/subStorySubmit', {
      id: wrapper.instance().state.currentStory.id,
      name,
      location: loc,
      heard,
      saw,
      story,
    });
  });
});
