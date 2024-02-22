import {increment} from 'actions/counterActionCreators';
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const CounterEx = () => {
  const dispatch = useDispatch();
  const count = useSelector<any>(state => state.counter.count);

  return (
    <View style={{flex: 1}}>
      <Text style={{alignSelf: 'center', fontSize: 20}}>{count + ''}</Text>
      <Button
        testID="incrementBtn"
        title="Increment Couter"
        onPress={() => {
          //from Action Creator
          dispatch(increment(1));
        }}
      />
      <Button
        testID="decrementBtn"
        title="Decrement Couter"
        onPress={() => {
          // direct payload (without action creator)
          dispatch({
            type: 'DECREMENT',
            params: {diff: 1},
          });
        }}
      />
    </View>
  );
};
export default CounterEx;
