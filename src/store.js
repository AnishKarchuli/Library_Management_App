import { createStore, applyMiddleware} from 'redux'

import bookReducer from './bookReducer';

import loggerMiddleware from './loggerMiddleware';

export default createStore(bookReducer, applyMiddleware(loggerMiddleware))