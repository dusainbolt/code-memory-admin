import { createSlice } from '@reduxjs/toolkit';
import { LayoutSlice } from '../../models/LayoutModel';
import { SetNotifyAction, SetProcessUploadAction } from '../actionTypes/layoutActionTypes';
import { IRootState } from '../rootReducer';

const initialState: LayoutSlice = {
  processUpload: {
    loadingUpload: false,
    visibleProcessModal: false,
    messageUpload: '',
    uploadDone: false,
  },
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setNotifySlice: (state: LayoutSlice, action: SetNotifyAction) => {
      state.notify = action.payload;
    },
    setProcessUploadSlice: (state: LayoutSlice, action: SetProcessUploadAction) => {
      state.processUpload = action.payload;
    },
  },
});

export const getLayoutSlice = (state: IRootState) => state.layoutSlice as LayoutSlice;

export const { setNotifySlice, setProcessUploadSlice } = layoutSlice.actions;

export default layoutSlice.reducer;
