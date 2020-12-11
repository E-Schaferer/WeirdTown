import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LocationInfo from '../../components/LocationInfo/LocationInfo';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const wrapper = shallow(<LocationInfo />);
    expect(wrapper).toBeTruthy();
  });
});
