import { combineReducers } from '@reduxjs/toolkit';
import layoutSlice from './slices/layoutSlice';
import loginSlice from './slices/loginSlice';

export const whitelist = ['loginSlice'];

const rootReducer = combineReducers({ loginSlice, layoutSlice });

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
