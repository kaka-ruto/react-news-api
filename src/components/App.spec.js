import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';

it('App renders without crashing', () => {
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});