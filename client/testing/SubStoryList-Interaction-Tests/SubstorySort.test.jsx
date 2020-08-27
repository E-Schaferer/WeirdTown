import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubstorySort from '../../components/SubStoryList-Interactions/SubstorySort';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const subs = [
      {
        id: 1,
        subname: 'test1',
      },
      {
        id: 2,
        subname: 'test2',
      },
    ];
    const wrapper = shallow(<SubstorySort subs={subs} />);
    expect(wrapper).toBeTruthy();
  });
});
