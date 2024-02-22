export function increment(diff = 1) {
  return {
    type: 'INCREMENT',
    params: diff, // for request
  };
}

export function decrementWithSaga(diff: number) {
  return {
    type: 'DECREMENT_WITH_SAGA',
    params: diff, //for api / async response payloads
  };
}
