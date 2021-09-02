import { createSlice } from '@reduxjs/toolkit';
import { IRootState } from './../rootReducer';
import { SeoHome } from './../../models/SeoHomeModel';

const initialState: SeoHome = {
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
};


export const seoHomeSlice = createSlice({
  name: 'seoHome',
  initialState,
  reducers: {
    getSeoHomeSuccess: (state: SeoHome, action: any) => ({ ...state, ...action.payload }),
  },

});

export const getSeoHomeSlice = (state: IRootState): SeoHome => state.seoHomeSlice;

export const { getSeoHomeSuccess } = seoHomeSlice.actions;

export default seoHomeSlice.reducer;