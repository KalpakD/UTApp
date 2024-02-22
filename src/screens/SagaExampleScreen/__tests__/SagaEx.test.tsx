/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SagaEx from '../SagaEx';

const mockStore = configureMockStore();

describe('Render Home Components correctly ', () => {
  let props = {};
  let initialState = {counter: {count: 0}, list: {data: []}};
  const defaultStore = mockStore(initialState);
  let wrapper: any;
  beforeEach(() => {
    wrapper = (props: any, store: any) => (
      <Provider store={store}>
        <SagaEx />
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

  test('on Press Events on SagaEx Screen ', () => {
    fireEvent(screen.getByTestId('incrementBtn'), 'onPress');
    fireEvent(screen.getByTestId('decrementBtn'), 'onPress');
  });
  test('render Flatlist correctly', () => {
    let updatedState = {
      counter: {count: 0},
      list: {
        data: [
          {
            idLeague: '4328',
            strLeague: 'English Premier League',
            strSport: 'Soccer',
            strLeagueAlternate: 'Premier League, EPL',
          },
          {
            idLeague: '4329',
            strLeague: 'English League Championship',
            strSport: 'Soccer',
            strLeagueAlternate: 'Championship',
          },
        ],
      },
    };
    const updatedStore = mockStore(updatedState);
    render(wrapper(props, updatedStore));
    const eventData = {
      nativeEvent: {
        contentOffset: {
          y: 500,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 500,
          width: 100,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 100,
          width: 100,
        },
      },
    };
    fireEvent.scroll(screen.getByTestId('List'), eventData);
  });
});
