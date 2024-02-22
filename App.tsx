/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import Rootstack from '@navigation/Rootstack';
import crashlytics, {firebase} from '@react-native-firebase/crashlytics';
import {Provider} from 'react-redux';
import store from './src/store';

function App(): JSX.Element {
  useEffect(() => {
    crashlytics().log('App mounted.');
    let err = new Error(`EXCEPTION : Testing ERROR `);
    crashlytics().recordError(err, 'App Started');
  }, []);

  return (
    <Provider store={store}>
      <Rootstack />
    </Provider>
  );
}

export default App;
