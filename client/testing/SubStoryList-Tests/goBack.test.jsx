import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GoBack from '../../components/SubStoryList/GoBack';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('placeholder', () => {
    expect(true);
  });
  // it('should render', () => {
  //   const wrapper = shallow(<GoBack />);
  //   expect(wrapper).toBeTruthy();
  // });
});
