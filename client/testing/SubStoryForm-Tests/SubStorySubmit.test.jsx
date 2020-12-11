import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubStorySubmit from '../../components/SubStoryForm/SubStorySubmit';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const wrapper = shallow(<SubStorySubmit />);
    expect(wrapper).toBeTruthy();
  });
  it('should call subStoryFormSubmit if all fields are populated', () => {
    const test = jest.fn();
    const wrapper = shallow(<SubStorySubmit
      subStoryFormSubmit={test}
      inputSubName="testName"
      inputSubLocation="testLoc"
      inputSubSaw="testSaw"
      inputSubHeard="testHeard"
      inputSubStory="testStory"
    />);
    wrapper.find('#substory-submit-button').simulate('click');
    expect(test).toHaveBeenCalled();
  });
  it('should call handleUserError if not all fields are populated', () => {
    const test = jest.fn();
    const wrapper = shallow(<SubStorySubmit
      handleUserError={test}
      inputSubName=""
      inputSubLocation="testLoc"
      inputSubSaw="testSaw"
      inputSubHeard="testHeard"
      inputSubStory="testStory"
    />);
    wrapper.find('#substory-submit-button').simulate('click');
    expect(test).toHaveBeenCalled();
  });
});
