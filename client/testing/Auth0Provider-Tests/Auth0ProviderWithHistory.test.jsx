import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Auth0ProviderWithHistory from '../../components/Auth0Provider/Auth0ProviderWithHistory';

configure({ adapter: new Adapter() });

describe('substory sort tests', () => {
  it('should render', () => {
    const wrapper = shallow(<Auth0ProviderWithHistory />);
    expect(wrapper).toBeTruthy();
  });
});
