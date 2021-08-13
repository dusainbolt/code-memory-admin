import { createStore, applyMiddleware } from 'redux';
import rootReducer, { IRootState, whitelist } from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';

/**
 *  blacklist config redux
 *  whitelist config redux persit
 */
const persistConfig = {
  version: 1,
  key: 'code_memory_admin',
  storage: storage,
  whitelist,
};

const reducer = persistReducer(persistConfig, rootReducer);
export const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredActionPaths: ['payload.callback'],
      },
    }),
    sagaMiddleware,
  ],
});

export const persistor = persistStore(store, {});

export default store;

export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
