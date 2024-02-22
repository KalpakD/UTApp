import {decrementWithSaga} from 'actions/counterActionCreators';
import {takeLatest, put, takeEvery} from 'redux-saga/effects';

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function* counterFunc(action: any) {
  console.log('saga' + JSON.stringify(action));
  let c = {diff: 0};
  yield delay(1000);
  c = action.params;
  yield put(decrementWithSaga(c));
}
export default function* rootSaga() {
  yield takeLatest('DECREMENT_PARAMS', counterFunc);
}
