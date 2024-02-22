import {increment} from 'actions/counterActionCreators';
import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const SagaEx = () => {
  //   const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector<any>(state => state.counter.count);
  const listData = useSelector<any>(state => state.list.data);
  useEffect(() => {
    dispatch({type: 'GET_LIST_API_CALL'});
  }, []);
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
            type: 'DECREMENT_PARAMS',
            params: {diff: 1},
          });
        }}
      />
      <FlatList
        testID="List"
        data={Array.isArray(listData) ? listData : []}
        renderItem={({item, index}) => (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>{item.strLeague + ''}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default SagaEx;
