import { createSlice } from '@reduxjs/toolkit';
import { ExpSlice } from '../../models/ExperienceModel';
import { PJSlice } from '../../models/ProjectModel';
import { SkillSlice } from '../../models/SkillModel';
import { TagSlice } from '../../models/TagModel';
import {
  getListSkillAction,
  getListSkillSuccessAction,
  setCheckedSkillAction,
  setVisibleSkillFormAction,
  SubmitSkillAction,
  updateSkillAction,
} from '../actionTypes/skillActionTypes';

import { IRootState } from '../rootReducer';

const initialState: SkillSlice = {
  dataSkills: [],
  total: 0,
  isLoadingList: false,
  isLoadingForm: false,
  visibleFormSkill: false,
  skillDetail: {},
  disableButton: true,
  
};

export const skillSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    submitSkillSliceStart: (state: SkillSlice, action: SubmitSkillAction) => {
      state.isLoadingForm = true;
    },
    submitSkillSliceSuccess: (state: SkillSlice) => {
      state.isLoadingForm = false;
      state.visibleFormSkill = false;
    },
    submitSkillSliceError: (state: SkillSlice) => {
      state.isLoadingForm = false;
    },
    setVisibleFormSkill: (state: SkillSlice, { payload }: setVisibleSkillFormAction) => ({
      ...state,
      ...payload,
    }),
    getListSkillStart: (state: SkillSlice, action: getListSkillAction) => {
      state.isLoadingList = true;
    },
    getListSkillSuccess: (state: SkillSlice, action: getListSkillSuccessAction) => {
      return {
        ...state,
        dataSkills: action.payload,
        isLoadingList: false,
      };
    },
    getListSkillError: (state: SkillSlice) => {
      state.isLoadingList = false;
    },
    setCheckedSkill: (state: SkillSlice, action: setCheckedSkillAction) => {
      state.dataSkills[action.payload.index].status=action.payload.status
      state.disableButton=false
    },
    updateSkill: (state: SkillSlice, action: updateSkillAction) => {
      return {
        ...state,
        disableButton: true,
      }
    }

  },
});

export const getSkillSlice = (state: IRootState) => state.skillSlice as SkillSlice;

export const {
  submitSkillSliceStart,
  submitSkillSliceSuccess,
  submitSkillSliceError,
  setVisibleFormSkill,
  getListSkillStart,
  getListSkillSuccess,
  getListSkillError,
  setCheckedSkill,
  updateSkill
} = skillSlice.actions;

export default skillSlice.reducer;
