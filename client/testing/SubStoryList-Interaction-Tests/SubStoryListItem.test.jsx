import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubStoryListItem from '../../components/SubStoryList-Interactions/SubStoryListItem';

configure({ adapter: new Adapter() });

describe('substory list item tests', () => {
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
    const wrapper = shallow(<SubStoryListItem subs={subs} />);
    expect(wrapper).toBeTruthy();
  });
});
