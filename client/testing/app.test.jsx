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
});
