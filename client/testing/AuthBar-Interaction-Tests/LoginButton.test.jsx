import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginButton from '../../components/AuthBar-Interactions/LoginButton';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const wrapper = shallow(<LoginButton />);
    expect(wrapper).toBeTruthy();
  });
});
