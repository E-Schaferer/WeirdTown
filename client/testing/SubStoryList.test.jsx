import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubStoryList from '../components/SubStoryList';

configure({ adapter: new Adapter() });

describe('substory list tests', () => {
  it('should render', () => {
    const wrapper = shallow(<SubStoryList />);
    expect(wrapper).toBeTruthy();
  });
  it('should increment likes when likeGoUp is called', () => {
    const wrapper = shallow(<SubStoryList />);
    wrapper.instance().likeGoUp();
    expect(wrapper.instance().state.subStory.sublikes).toBe(1);
  });
  it('should decrement likes when likeGoDown is called', () => {
    const wrapper = shallow(<SubStoryList />);
    wrapper.instance().likeGoDown();
    expect(wrapper.instance().state.subStory.sublikes).toBe(-1);
  });
  it('should call onSubStoryListItemClick and set subStory to the 0 index of result.data', () => {
    const test = jest.fn();
    const result = {
      data: ['winner', 'loser'],
    };
    const wrapper = shallow(<SubStoryList onSubStoryListItemClick={test} />);
    wrapper.instance().handleListClick(result);
    expect(test).toHaveBeenCalled();
    expect(wrapper.instance().state.subStory).toBe('winner');
  });
  it('should render the list of substories if subStorySubList is passed as true as a prop', () => {
    const wrapper = shallow(<SubStoryList subStorySubList subs={[{}]} />);
    expect(wrapper.find('#substory-sub-list').exists()).toBeTruthy();
    expect(wrapper.find('#substory-render-zone').exists()).toBeFalsy();
  });
  it('should render the substory if subStoryRenderZone is passed as true as a prop', () => {
    const wrapper = shallow(<SubStoryList subStoryRenderZone />);
    expect(wrapper.find('#substory-sub-list').exists()).toBeFalsy();
    expect(wrapper.find('#substory-render-zone').exists()).toBeTruthy();
  });
});
