import * as Yup from 'yup';

export default class HashService {
  public instance = Yup;
  public i18n = null;
  readonly MESSAGE_REQUIRE = 'message.MSG_1';

  constructor(i18n) {
    this.i18n = i18n;
  }
}
