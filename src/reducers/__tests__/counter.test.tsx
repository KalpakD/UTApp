import counter from 'reducers/counter';

describe('Counter reducer', () => {
  let incPayload = {
    state: {count: 0},
    action: {type: 'INCREMENT'},
  };
  test('Counter Increment Function', () =>
    expect(counter(incPayload.state, incPayload.action)).toEqual({count: 1}));

  let decPayload = {
    state: {count: 2},
    action: {type: 'DECREMENT', params: {diff: 1}},
  };
  test('Counter Decrement Function', () =>
    expect(counter(decPayload.state, decPayload.action)).toEqual({count: 1}));

  test('Counter Decrement SagaFunction', () => {
    expect(
      counter({count: 2}, {type: 'DECREMENT_WITH_SAGA', params: {diff: 1}}),
    ).toEqual({count: 1});
  });
});
