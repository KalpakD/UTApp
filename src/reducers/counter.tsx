import {delay} from 'sagas/counterSaga';

export default function counter(
  state = {
    count: 0,
  },
  action: {type: string; params?: {diff: number}},
) {
  switch (action.type) {
    case 'INCREMENT':
      // let count = action.payload;
      return {...state, count: state.count + 1};
    case 'DECREMENT':
      let c = 0;
      if (action?.params)
        // async () => {
        // await
        // delay(1000);
        c = action?.params.diff;
      // };

      return {...state, count: state.count - c};
    case 'DECREMENT_WITH_SAGA':
      console.log('PAYLOAD==' + JSON.stringify(action.params));
      let d = 0;
      if (action?.params) d = action?.params.diff;
      return {...state, count: state.count - d};

    default:
      return state;
  }
}
