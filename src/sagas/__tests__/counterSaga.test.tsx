import {decrementWithSaga} from 'actions/counterActionCreators';
import {put} from 'redux-saga/effects';

import {counterFunc} from 'sagas/counterSaga';

describe('counter Saga', () => {
  const action = {params: {diff: 1}};

  it('Should Call counter', () => {
    const generator = counterFunc(action);
    generator.next();
    const next = generator.next();
    expect(next.value).toEqual(put(decrementWithSaga(action.params)));
  });
});
