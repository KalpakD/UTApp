/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import { render, screen } from '@testing-library/react-native';
it('renders correctly', () => {
 
    render(<App />);
 expect( screen.toJSON()).toMatchSnapshot()
});
