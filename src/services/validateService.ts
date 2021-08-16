import * as Yup from 'yup';
import { FieldCreateTag, FieldLogin } from '../models/FieldModel';

export default class ValidateService {
  public instance = Yup;
  public i18n = null;
  readonly MESSAGE_REQUIRE = 'message.MSG_1';
  readonly LABEL_FIELD_IMAGE = 'common.image';

  constructor(i18n) {
    this.i18n = i18n;
  }

  stringRequire = fieldName => {
    return Yup.string().required(this.i18n('message.MSG_1', { fieldName: this.i18n(fieldName) }));
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
      [thumbnail.name]: this.stringRequire(this.LABEL_FIELD_IMAGE),
    });
  };
}
