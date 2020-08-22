import React from 'react';
import { mount } from 'enzyme';
import Input from '../../components/atoms/Input';

describe('Input, atom testing', () => {
  const input = mount(<Input />);
  test('Atom rendering', () => {
    expect(input.length).toEqual(1);
  });
});
