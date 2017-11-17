import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';

describe('App: The main component', () => {
  const component = shallow(<App />);

  it('App renders without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Contains three children', () => {
  });
});