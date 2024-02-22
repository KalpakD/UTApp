import * as React from 'react';
import {View, Text, Button} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

const Home = ({navigation}: any) => {
  let data = null;
  React.useEffect(() => {
    crashlytics().log('Home Screen mounted.');
  }, [data]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text testID="HomePress" onPress={() => crashlytics().crash()}>
        Home Screen
      </Text>
      <Button
        testID="reduxBtn"
        title="Redux Example"
        onPress={() => navigation.navigate('CounterEx')}
      />
      <Button
        testID="sagaBtn"
        title="ReduxSaga Example"
        onPress={() => navigation.navigate('SagaEx')}
      />
    </View>
  );
};
export default Home;
