import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { middleware as reduxPackMiddleware } from 'redux-pack';

import rootReducer from './reducers';

import defaultState from './state';

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const store = createStore(rootReducer, defaultState,
  applyMiddleware(
    reduxPackMiddleware,
    logger,
  ),
);

export default store;
