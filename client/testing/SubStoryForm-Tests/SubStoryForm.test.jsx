import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubStoryForm from '../../components/SubStoryForm/SubStoryForm';

configure({ adapter: new Adapter() });

describe('unit tests', () => {
  it('should exist', () => {
    const wrapper = shallow(<SubStoryForm />);
    expect(wrapper).toBeTruthy();
  });
});
