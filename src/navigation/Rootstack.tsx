import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from 'screens/Home/Home';
import CounterEx from 'screens/ReduxExampleScreen/CounterEx';
import SagaEx from 'screens/SagaExampleScreen/SagaEx';

const Stack = createNativeStackNavigator();
const Rootstack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CounterEx" component={CounterEx} />
        <Stack.Screen name="SagaEx" component={SagaEx} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Rootstack;
