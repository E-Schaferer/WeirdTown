import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Mapzone from '../../components/MapZone/Mapzone';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const wrapper = shallow(<Mapzone />);
    expect(wrapper).toBeTruthy();
  });
});
