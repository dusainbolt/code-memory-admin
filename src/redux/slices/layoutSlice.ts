import { createSlice } from '@reduxjs/toolkit';
import { LayoutSlice } from '../../models/LayoutModel';
import { SetNotifyAction } from '../actionTypes/layoutActionTypes';
import { IRootState } from '../rootReducer';

const initialState: LayoutSlice = {};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setNotifySlice: (state: LayoutSlice, action: SetNotifyAction) => {
      state.notify = action.payload;
    },
  },
});

export const getLayoutSlice = (state: IRootState) => state.layoutSlice as LayoutSlice;

export const { setNotifySlice } = layoutSlice.actions;

export default layoutSlice.reducer;
