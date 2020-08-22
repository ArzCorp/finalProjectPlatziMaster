import React from 'react';
import { mount } from 'enzyme';
import Button from '../../components/atoms/Button';

describe('Button, atom testing', () => {
  const button = mount(<Button />);
  test('Atom rendering', () => {
    expect(button.length).toEqual(1);
  });
});
