import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';

configure({ adapter: new Adapter() });

describe('app tests', () => {
  const docWrapper = mount(<App />, { attachTo: document.body });
  it('should render', () => {
    expect(docWrapper).toBeTruthy();
  });
});
