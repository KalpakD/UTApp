import {combineReducers} from 'redux';
// import todos from './todos';
import counter from './counter';
import list from './list';
/** REDUX METHODS
 * 
createStore - to actually create a Redux store
combineReducers - to combine multiple slice reducers into a single larger reducer
applyMiddleware - to combine multiple middleware into a store enhancer
compose - to combine multiple store enhancers into a single store enhancer
 */
export default combineReducers({
  counter,
  list,
});
