import { TIME_FORMAT } from './../constant/index';
import { User } from '../models/UserModel';
import dayjs from 'dayjs';

export class HelperService {

  getFullName = (user: User) => {
    return `${user.firstName} ${user.lastName}`;
  };

  toObject = (arr: Array<any>, fieldName: string) => {
    let obj = {};
    if (!!!arr?.length) {
      return obj;
    }
    arr.forEach((item, index) => {
      obj[`${fieldName}_${index}`] = item;
    });
    return obj;
  };

  ignoreString = (string: string, key: string) => {
    return string?.indexOf(key) === -1;
  };

  getFullNameUser = (user: User): string => {
    return `${user.firstName} ${user.lastName}`;
  };

  getOrderType = (order: string) => (order === 'ascend' && 1) || (order === 'descend' && -1) || null;

  handleResetSearch = (handleReset: any, handleSubmit: any) => () => {
    handleReset();
    handleSubmit();
  };

  getKeyByObjStr = (key: string) => {
    const keyArr = key?.split(".");
    return keyArr.length > 1 ? keyArr[1] : key;
  }

  getValByStrKey = (obj: any, key: string) => {
    const keyArr = key.split(".");
    return keyArr.length > 1 ? obj[keyArr[0]]?.[keyArr[1]] : obj[key];
  };

  convertTimeDisplay = (value: any, format: string = TIME_FORMAT.DD_MM_YYYY_HH_MM_SS) => {
    return dayjs(parseInt(value)).format(format);
  }

};



