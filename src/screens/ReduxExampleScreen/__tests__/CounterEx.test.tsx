/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import CounterEx from '../CounterEx';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

describe('Render Home Components correctly ', () => {
  let props = {};
  let initialState = {counter: {count: 0}};
  const defaultStore = mockStore(initialState);
  let wrapper: any;
  beforeEach(() => {
    wrapper = (props: any, store: any) => (
      <Provider store={store}>
        <CounterEx />
      </Provider>
    );
    render(wrapper(props, defaultStore));
  });

  afterEach(() => {
    jest.clearAllMocks();
    wrapper = null;
  });
  //this is  Snapshot testing
  it('renders correctly', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
  test('on Press Events on CounterEx Screen method 1', () => {
    const {getByTestId} = render(wrapper(props, defaultStore));
    fireEvent(getByTestId('incrementBtn'), 'onPress');
  });
  test('on Press Events on CounterEx Screen method 2', () => {
    fireEvent(screen.getByTestId('decrementBtn'), 'onPress');
  });
});
