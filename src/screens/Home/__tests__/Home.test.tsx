/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Home from 'screens/Home/Home';

describe('Render Home Components correctly ', () => {
  //this is  Snapshot testing
  it('renders correctly', () => {
    render(<Home />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
  test('on Press Events on Home Screen', () => {
    //Mocking Navigation method navigate
    let props = {navigation: {navigate: jest.fn()}};
    const {getByTestId} = render(<Home {...props} />);
    fireEvent(getByTestId('HomePress'), 'onPress');
    fireEvent(getByTestId('reduxBtn'), 'onPress');
    fireEvent(getByTestId('sagaBtn'), 'onPress');
    fireEvent(getByTestId('InputField'), 'onChangeText', 10);
    fireEvent(getByTestId('InputField'), 'onChangeText', 110);
    fireEvent(getByTestId('InputField'), 'onChangeText', 1000);
  });
});
