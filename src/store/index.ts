import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { middleware as reduxPackMiddleware } from 'redux-pack';

import rootReducer from './reducers';

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const middlewares = [reduxPackMiddleware];

if (process.env.NODE_ENV !== 'test')
  middlewares.push(logger);

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
