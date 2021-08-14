import { createSlice } from '@reduxjs/toolkit';
import { TagSlice } from '../../models/TagModel';
import { GetListTagAction, GetListTagSuccessAction } from '../actionTypes/tagActionTypes';
import { IRootState } from '../rootReducer';

const initialState: TagSlice = {
  dataTags: [],
  total: 0,
};

export const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    getTagListSliceStart: (state: TagSlice, action: GetListTagAction) => {},
    getTagListSliceSuccess: (state: TagSlice, action: GetListTagSuccessAction) => {
      state.dataTags = action.payload.dataTags;
      state.total = action.payload.total;
    },
    getTagListSliceError: (state: TagSlice, action: any) => {},
  },
});

export const getTagSlice = (state: IRootState) => state.tagSlice as TagSlice;

export const { getTagListSliceStart, getTagListSliceSuccess, getTagListSliceError } = tagSlice.actions;

export default tagSlice.reducer;
