import React from 'react';
import { shallow } from 'enzyme';
import ProviderMock from '../__mocks__/ProviderMock';
import App from '../components/App';

describe('App, component testing', () => {
  test('Component rendering', () => {
    const header = shallow(
      <ProviderMock>
        <App />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });
});
