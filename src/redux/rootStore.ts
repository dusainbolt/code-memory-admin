import { createStore, applyMiddleware } from 'redux';
import rootReducer, { IRootProps } from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

/**
 *  blacklist config redux
 *  whitelist config redux persit
 */

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['loginReducer', 'userReducer'],
};

const root = persistReducer(persistConfig, rootReducer);
export const sagaMiddleware = createSagaMiddleware();

const store = createStore(root, applyMiddleware(sagaMiddleware, logger));
export const persistor = persistStore(store, {});

export default store;

export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<IRootProps> = useSelector;
