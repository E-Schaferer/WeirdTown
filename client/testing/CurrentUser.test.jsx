import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CurrentUser from '../components/CurrentUser';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const wrapper = shallow(<CurrentUser />);
    expect(wrapper).toBeTruthy();
  });
});
