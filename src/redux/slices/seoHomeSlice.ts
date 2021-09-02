import { SubmitSeoHomeAction } from './../actionTypes/seoHomeActionTypes';
import { createSlice } from '@reduxjs/toolkit';
import { IRootState } from './../rootReducer';
import { SeoHome } from './../../models/SeoHomeModel';

export interface SeoHomeSlice {
  seoHome: SeoHome,
  isLoadingSubmit: boolean;
}

const initialState: SeoHomeSlice = {
  seoHome: {
    description: "",
    domain: "",
    facebookChatPlugin: "",
    image: {
      faviconUrlICO: "",
      faviconUrlJPG: "",
      logo1280x720: "",
      logo400x400: "",
      logo800x600: "",
      logoAlt: "",
    },
    siteName: "",
    social: {
      facebookAppId: "",
      facebookPageUrl: "",
      twitterUrl: "",
      youtubeUrl: "",
    },
    languageAlternates: "",
    searchBoxUrl: "",
    title: "",
    id: "",
  },
  isLoadingSubmit: false,
};


export const seoHomeSlice = createSlice({
  name: 'seoHome',
  initialState,
  reducers: {
    getSeoHomeSuccess: (state: SeoHomeSlice, action: any) => ({ ...state, ...action.payload }),
    submitSeoHomeStart: (state: SeoHomeSlice, action: SubmitSeoHomeAction) => {
      state.isLoadingSubmit = true;
    },
    submitSeoHomeSuccess: (state: SeoHomeSlice, action: any) => {
      state.isLoadingSubmit = false;
    },
    submitSeoHomeError: (state: SeoHomeSlice, action: any) => {
      state.isLoadingSubmit = false;
    },
  },

});

export const getSeoHomeSlice = (state: IRootState): SeoHomeSlice => state.seoHomeSlice;

export const { getSeoHomeSuccess, submitSeoHomeSuccess, submitSeoHomeStart, submitSeoHomeError } = seoHomeSlice.actions;

export default seoHomeSlice.reducer;