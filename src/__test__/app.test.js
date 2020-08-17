import React from 'react';
import { mount } from 'enzyme';
import App from '../../src/App';

describe('App component test', () => {
  test('render component', () => {
    const header = mount(<App />);
    expect(header.length).toEqual(1);
  });
});