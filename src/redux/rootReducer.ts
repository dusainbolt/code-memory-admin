import { combineReducers } from '@reduxjs/toolkit';
import loginSlice from './slices/loginSlice';

export const whitelist = ['loginSlice'];

const rootReducer = combineReducers({ loginSlice });

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
