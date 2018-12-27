import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { middleware as reduxPackMiddleware } from 'redux-pack';

import rootReducer from './reducers';

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const store = createStore(rootReducer,
  applyMiddleware(
    reduxPackMiddleware,
    logger,
  ),
);

export default store;
