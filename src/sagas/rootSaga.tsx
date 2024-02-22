import {all, fork} from 'redux-saga/effects';
import counterSaga from './counterSaga';
import listSaga from './listSaga';

export function* rootSaga() {
  yield all([fork(counterSaga), fork(listSaga)]);
}
