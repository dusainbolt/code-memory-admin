import * as Yup from 'yup';
import { FieldCreateExperience, fieldCreateExperience, FieldCreateTag, FieldLogin } from '../models/FieldModel';

export default class ValidateService {
  public instance = Yup;
  public i18n = null;
  readonly MESSAGE_REQUIRE = 'message.MSG_1';
  readonly LABEL_FIELD_IMAGE = 'common.image';

  constructor(i18n) {
    this.i18n = i18n;
  }

  getMessageRequire = fieldName => {
    return this.i18n('message.MSG_1', { fieldName: this.i18n(fieldName) });
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

  readonly validateCreateExperienceInput = (fieldCreateExperience: FieldCreateExperience) => {
    const { nameVN,nameEN, descriptionVN, descriptionEN, position, thumbnail } = fieldCreateExperience;
    return Yup.object({
      [nameVN.name]: this.stringRequire(nameVN.label),
      [nameEN.name]: this.stringRequire(nameEN.label),
      [descriptionEN.name]: this.stringRequire(descriptionEN.label),
      [descriptionVN.name]: this.stringRequire(descriptionVN.label),
      [position.name]: this.stringRequire(position.label),
      [position.name]: this.stringRequire(position.label),
      [thumbnail.name]: this.mixRequire(this.LABEL_FIELD_IMAGE),
    })
  }
}
