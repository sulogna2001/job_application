import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

import jobsReducer from './reducers/jobsReducer';
import filterReducer from './reducers/filterReducer'

const rootReducer = combineReducers({
    jobs: jobsReducer,
    filters:filterReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
