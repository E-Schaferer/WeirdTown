import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LogoutButton from '../../components/AuthBar-Interactions/LogoutButton';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const wrapper = shallow(<LogoutButton />);
    expect(wrapper).toBeTruthy();
  });
});
