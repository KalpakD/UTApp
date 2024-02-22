import * as React from 'react';
import {View, Text, Button, TextInput, ScrollView} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import {useNavigation} from '@react-navigation/native';

const Home = () =>
  // {navigation}: any
  {
    let navigation: any = useNavigation();
    let data = null;
    const [value, setValue] = React.useState(0);
    const [type, setType] = React.useState('');
    React.useEffect(() => {
      crashlytics().log('Home Screen mounted.');
    }, [data]);

    React.useEffect(() => {
      if (value) {
        if (value > 500) {
          setType('Expensive');
        } else if (value > 100) {
          setType('Not Expensive');
        } else {
          setType('Great');
        }
      }
    }, [value]);
    return (
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
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
          <TextInput
            testID="InputField"
            placeholder="Enter a Value"
            keyboardType="number-pad"
            style={{
              borderColor: 'black',
              borderWidth: 1,
              margin: 16,
              minWidth: 80,
              padding: 8,
            }}
            onChangeText={val => {
              setValue(Number(val));
            }}
          />
          <Text>Value Entered is {type}</Text>
        </View>
      </ScrollView>
    );
  };
export default Home;
