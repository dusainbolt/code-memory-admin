import { createSlice } from '@reduxjs/toolkit';
import { TagSlice } from '../../models/TagModel';
import { GetListTagAction, GetListTagSuccessAction, SubmitFormTagAction } from '../actionTypes/tagActionTypes';
import { IRootState } from '../rootReducer';

const initialState: TagSlice = {
  dataTags: [],
  total: 0,
  isLoadingList: false,
  isLoadingForm: false,
};

export const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    getTagListSliceStart: (state: TagSlice, action: GetListTagAction) => {
      state.isLoadingList = true;
    },
    getTagListSliceSuccess: (state: TagSlice, action: GetListTagSuccessAction) => {
      return {
        ...state,
        dataTags: action.payload.dataTags,
        total: action.payload.total,
        isLoadingList: false,
      };
    },
    getTagListSliceError: (state: TagSlice, action: any) => {
      state.isLoadingList = false;
    },
    submitFormTagSliceStart: (state: TagSlice, action: SubmitFormTagAction) => {
      state.isLoadingForm = true;
    },
    submitFormTagSliceSuccess: (state: TagSlice, action: any) => {
      state.isLoadingForm = false;
    },
    submitFormTagSliceError: (state: TagSlice, action: any) => {
      state.isLoadingForm = false;
    },
  },
});

export const getTagSlice = (state: IRootState) => state.tagSlice as TagSlice;

export const {
  getTagListSliceStart,
  getTagListSliceSuccess,
  getTagListSliceError,
  submitFormTagSliceStart,
  submitFormTagSliceSuccess,
  submitFormTagSliceError,
} = tagSlice.actions;

export default tagSlice.reducer;
