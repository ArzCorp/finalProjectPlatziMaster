import React from 'react';
import { mount } from 'enzyme';
import App from '../style/components/App';

describe('App component testing', () => {
  test('Component rendering', () => {
    const header = mount(<App />);
    expect(header.length).toEqual(1);
  });
});
