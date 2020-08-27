import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowSubForm from '../../components/SubStory-Interactions/ShowSubForm';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const wrapper = shallow(<ShowSubForm />);
    expect(wrapper).toBeTruthy();
  });
});
