import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignUpButton from '../../components/AuthBar-Interactions/SignUpButton';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const wrapper = shallow(<SignUpButton />);
    expect(wrapper).toBeTruthy();
  });
});
