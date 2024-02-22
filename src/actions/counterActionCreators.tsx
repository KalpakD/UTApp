export function increment(diff = 1) {
  return {
    type: 'INCREMENT',
    params: diff, // for request
  };
}

export function decrementWithSaga(diff) {
  return {
    type: 'DECREMENT_WITH_SAGA',
    payload: diff, //for api / async response payloads
  };
}
