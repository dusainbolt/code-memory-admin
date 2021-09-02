import { IField } from "./FieldModel";


export type SeoHomeImage = {
  faviconUrlICO: String,
  faviconUrlJPG: String,
  logo400x400: String,
  logo800x600: String,
  logo1280x720: String,
  logoAlt: String,
}

export type SeoHomeSocial = {
  facebookAppId: String,
  facebookPageUrl: String,
  twitterUrl: String,
  youtubeUrl: String,
}

export interface SeoHome {
  id?: string,
  description: string,
  domain: string,
  facebookChatPlugin: string,
  image: SeoHomeImage,
  languageAlternates: string,
  searchBoxUrl: string,
  siteName: string,
  social: SeoHomeSocial,
  title: string,
}

export interface FieldSocialSeoHome {
  facebookAppId: IField,
  facebookPageUrl: IField,
  twitterUrl: IField,
  youtubeUrl: IField,
}

export interface FieldImageSeoHome {
  faviconUrlICO: IField,
  faviconUrlJPG: IField,
  logo1280x720: IField,
  logo400x400: IField,
  logo800x600: IField,
  logoAlt: IField,
}

export interface FieldSeoHome {
  description: IField;
  domain: IField;
  title: IField;
  facebookChatPlugin: IField;
  searchBoxUrl: IField;
  languageAlternates: IField;
  siteName: IField;
  image: FieldImageSeoHome,
  social: FieldSocialSeoHome,
}



export const fieldSeoHome: FieldSeoHome = {
  siteName: {
    name: "siteName",
    label: "seo.siteName",
    placeholder: "seo.placeholder_siteName"
  },
  title: {
    name: "title",
    label: "seo.title",
    placeholder: "seo.placeholder_title"
  },
  description: {
    name: "description",
    label: "seo.description",
    placeholder: "seo.placeholder_description",
  },
  domain: {
    name: "domain",
    label: "seo.domain",
    placeholder: "seo.placeholder_domain",
  },
  searchBoxUrl: {
    name: "searchBoxUrl",
    label: "seo.searchBoxUrl",
    placeholder: "seo.placeholder_searchBoxUrl",
  },
  languageAlternates: {
    name: "languageAlternates",
    label: "seo.languageAlternates",
    placeholder: "seo.placeholder_languageAlternates",
  },
  facebookChatPlugin: {
    name: "facebookChatPlugin",
    label: "seo.facebookChatPlugin",
    placeholder: "seo.placeholder_facebookChatPlugin"
  },
  image: {
    faviconUrlICO: {
      name: "image.faviconUrlICO",
      label: "seo.faviconUrlICO",
    },
    faviconUrlJPG: {
      name: "image.faviconUrlJPG",
      label: "seo.faviconUrlJPG",
    },
    logo1280x720: {
      name: "image.logo1280x720",
      label: "seo.logo1280x720",
    },
    logo400x400: {
      name: "image.logo400x400",
      label: "seo.logo400x400",
    },
    logo800x600: {
      name: "image.logo800x600",
      label: "seo.logo800x600"
    },
    logoAlt: {
      name: "image.logoAlt",
      label: "seo.logoAlt",
    },
  },
  social: {
    facebookAppId: {
      name: "social.facebookAppId",
      label: "seo.facebookAppId",
    },
    facebookPageUrl: {
      name: "social.facebookPageUrl",
      label: "seo.facebookPageUrl"
    },
    twitterUrl: {
      name: "social.twitterUrl",
      label: "seo.twitterUrl"
    },
    youtubeUrl: {
      name: "social.youtubeUrl",
      label: "seo.youtubeUrl"
    },
  },
};