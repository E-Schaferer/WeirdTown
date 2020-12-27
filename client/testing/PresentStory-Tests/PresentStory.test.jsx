import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAxios from 'jest-mock-axios';
import PresentStory from '../../components/PresentStory/PresentStory';

configure({ adapter: new Adapter() });

const spy = jest.fn();
const onShowSub = spy;
const handleError = spy;

describe('PresentStory tests', () => {
  it('placeholder', () => {
    expect(true);
  });
  // afterEach(() => {
  //   mockAxios.reset();
  // });
  // it('should render', () => {
  //   const story = {
  //     storyId: 'REDACTED',
  //     story: 'REDACTED',
  //     storylocation: 'REDACTED',
  //     storyname: 'REDACTED',
  //     thingsseen: 'REDACTED',
  //     thingsheard: 'REDACTED',
  //   };
  //   const wrapper = shallow(<PresentStory currentStory={story} />);
  //   expect(wrapper).toBeTruthy();
  // });
  // it('should update state when handleSort is called', () => {
  //   const wrapper = shallow(<PresentStory />);
  //   wrapper.instance().handleSort([1]);
  //   expect(wrapper.instance().state.subs).toEqual(expect.arrayContaining([1]));
  // });
  // it('should call onShowSub and handle state when showSub is invoked', () => {
  //   const currentProp = { id: 1 };
  //   const response = { data: [1, 2, 3] };
  //   const wrapper = shallow(<PresentStory
  //     currentStory={currentProp}
  //     onShowSub={onShowSub}
  //   />);
  //   wrapper.instance().showSub();
  //   mockAxios.mockResponse(response);
  //   expect(wrapper.instance().state.subNum).toEqual(3);
  //   expect(spy).toHaveBeenCalled();
  // });
  // it('should call handleError when showSub receives and error', () => {
  //   const wrapper = shallow(<PresentStory handleError={handleError} />);
  //   const errObj = {
  //     message: 'show sub error message',
  //   };
  //   wrapper.instance().showSub();
  //   mockAxios.mockError(errObj);
  //   expect(spy).toHaveBeenCalled();
  // });
  // it('should render substory-prompt based on given props', () => {
  //   const wrapper = shallow(<PresentStory subStoryPrompt />);
  //   expect(wrapper.find('#substory-prompt').exists()).toBeTruthy();
  // });
  // it('should not render substory-prompt based on given props', () => {
  //   const wrapper = shallow(<PresentStory subStoryPrompt={false} />);
  //   expect(wrapper.find('#substory-prompt').exists()).toBeFalsy();
  // });
  // it('should render substory based on given props', () => {
  //   const wrapper = shallow(<PresentStory subStory />);
  //   expect(wrapper.find('#substory').exists()).toBeTruthy();
  // });
  // it('should not render substory based on given props', () => {
  //   const wrapper = shallow(<PresentStory subStory={false} />);
  //   expect(wrapper.find('#substory').exists()).toBeFalsy();
  // });
});
