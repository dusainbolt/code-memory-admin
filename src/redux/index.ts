import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import user from './user';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './user-saga';

const reducer = combineReducers({
    user,
});

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
    reducer: reducer,
    middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
