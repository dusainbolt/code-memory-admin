export const seoHomeResolver = `
  createBy
  description
  domain
  facebookChatPlugin
  history {
    key
    oldValue
    newValue
  }
  id
  image {
    logoAlt
    logo1280x720
    logo800x600
    faviconUrlJPG
    faviconUrlICO
    logo400x400
  }
  searchBoxUrl
  languageAlternates
  siteName
  social {
    youtubeUrl
    twitterUrl
    facebookAppId
    facebookPageUrl
  }
  title
`;

export const RS_SEO_HOME = {
  seoHomeCreate: "seoHomeCreate",
  getSeoHome: "seoHome",
};