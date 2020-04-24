import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { middleware as pack } from 'redux-pack';
import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux-immutable';

import reducer from './reducer';

const reducers = combineReducers({
  reducer,
});

const middlewares = [thunk, pack];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

const store = preloadedState => createStore(
  reducers,
  preloadedState,
  applyMiddleware(...middlewares),
);

export default store;
