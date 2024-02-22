import reducer from 'reducers/index';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from 'sagas/rootSaga';
/** REDUX METHODS
 * 
createStore - to actually create a Redux store
combineReducers - to combine multiple slice reducers into a single larger reducer
applyMiddleware - to combine multiple middleware into a store enhancer
compose - to combine multiple store enhancers into a single store enhancer
 */
// const sagaMiddleware = createSagaMiddleware();
// , applyMiddleware(sagaMiddleware)
const store = createStore(reducer);
// sagaMiddleware.run(rootSaga);
export default store;
