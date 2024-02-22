import {takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';
const url = `https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`;

export const getList = () => axios.get(url);
export function* apiCallFunc(action) {
  const response = yield call(getList);
  yield put({type: 'GET_LIST_DATA', payload: response?.data?.leagues});

  console.log('response' + JSON.stringify(response));
}
export default function* rootSaga() {
  yield takeLatest('GET_LIST_API_CALL', apiCallFunc);
}
