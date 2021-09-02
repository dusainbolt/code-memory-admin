import { HelperService } from './helperService';
import { TFunction } from 'react-i18next';
import * as Yup from 'yup';
import { FieldCreateTag, FieldLogin } from '../models/FieldModel';
import { FieldSeoHome } from '../models/SeoHomeModel';

export class ValidateService extends HelperService {
  public instance = Yup;
  public t: TFunction = null;
  readonly MESSAGE_REQUIRE = 'message.MSG_1';
  readonly LABEL_FIELD_IMAGE = 'common.image';

  constructor(t) {
    super();
    this.t = t;
  }

  getMessageRequire = fieldName => {
    return this.t('message.MSG_1', { fieldName: this.t(fieldName) });
  };

  stringRequire = fieldName => {
    return Yup.string().required(this.getMessageRequire(fieldName));
  };

  mixRequire = fieldName => {
    return Yup.mixed().required(this.getMessageRequire(fieldName));
  };

  readonly validateLoginInput = (fieldLogin: FieldLogin) => {
    const { credential, password } = fieldLogin;
    return Yup.object({
      [credential.name]: this.stringRequire(credential.label),
      [password.name]: this.stringRequire(password.label),
    });
  };

  readonly validateCreateTagInput = (fieldCreateTag: FieldCreateTag) => {
    const { title, description, thumbnail } = fieldCreateTag;
    return Yup.object({
      [title.name]: this.stringRequire(title.label),
      [description.name]: this.stringRequire(description.label),
      [thumbnail.name]: this.mixRequire(this.LABEL_FIELD_IMAGE),
    });
  };

  readonly validateSeoHomeInput = (fieldSeoHome: FieldSeoHome) => {
    const { title, description, domain, siteName, facebookChatPlugin, searchBoxUrl } = fieldSeoHome;
    const { faviconUrlICO, faviconUrlJPG, logo1280x720, logo400x400, logo800x600, logoAlt } = fieldSeoHome.image;
    return Yup.object({
      [siteName.name]: this.stringRequire(domain.label),
      [title.name]: this.stringRequire(title.label),
      [description.name]: this.stringRequire(description.label),
      [domain.name]: this.stringRequire(domain.label),
      [facebookChatPlugin.name]: this.stringRequire(facebookChatPlugin.label),
      [searchBoxUrl.name]: this.stringRequire(searchBoxUrl.label),
      image: Yup.object({
        [this.getKeyByObjStr(faviconUrlICO.name)]: this.mixRequire(this.LABEL_FIELD_IMAGE),
        [this.getKeyByObjStr(faviconUrlJPG.name)]: this.mixRequire(this.LABEL_FIELD_IMAGE),
        [this.getKeyByObjStr(logo1280x720.name)]: this.mixRequire(this.LABEL_FIELD_IMAGE),
        [this.getKeyByObjStr(logo400x400.name)]: this.mixRequire(this.LABEL_FIELD_IMAGE),
        [this.getKeyByObjStr(logo800x600.name)]: this.mixRequire(this.LABEL_FIELD_IMAGE),
        [this.getKeyByObjStr(logoAlt.name)]: this.stringRequire(logoAlt.label),
      }),
    });
  };
}
