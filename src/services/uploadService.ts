import { TFunction } from 'react-i18next';
import { message } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import S3 from 'react-aws-s3';
import { ProcessUpload } from '../models/LayoutModel';
import store from '../redux/rootStore';
import { setProcessUploadSlice } from '../redux/slices/layoutSlice';

export enum Storage {
  TAG = 'tag',
}

export type ResponseS3 = {
  bucket: string;
  key: string;
  location: string;
};

const config = {
  bucketName: 'code-memory',
  // dirName: 'media' /* optional */,
  region: 'ap-southeast-1',
  accessKeyId: 'AKIAUYZ7AQ5QF7I5RSM7',
  secretAccessKey: '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',
  s3Url: 'https://code-memory.s3.ap-southeast-1.amazonaws.com' /* optional */,
};

export default class UploadService {
  private s3 = null;
  private dispatch = null;
  constructor() {
    this.s3 = new S3(config);
    this.dispatch = store.dispatch;
  }

  isValidFormatImage = (type: string) => {
    return type === 'image/jpeg' || type === 'image/png' || type === 'image/svg+xml' || type === 'image/heic';
  };

  isValidSize = (fileSize, limitSize: number) => {
    return fileSize / 1024 / 1024 <= limitSize;
  }

  beforeUpload = (t: any, limitSize: number) => (file: any) => {
    return this.validateUploadImage(file, limitSize, t);
  };

  getBase64 = (img: any, callback: any) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  validateUploadImage = (file: UploadFile, limitSize: number, t: TFunction = null) => {
    const isJpgOrPng = this.isValidFormatImage(file.type);
    if (!isJpgOrPng && !!t) {
      message.error(t('message.upload_format_invalid'));
    }
    const isLt1M = this.isValidSize(file.size, limitSize);
    if (!isLt1M && !!t) {
      message.error(t('message.upload_limit_size', { size: limitSize }));
    }
    return isJpgOrPng && isLt1M;
  };

  async uploadFile(file: any, fileName, typeStorage = Storage.TAG) {
    this.dispatch(setProcessUploadSlice({ loadingUpload: true, visibleProcessModal: true } as ProcessUpload));
    return await this.s3
      .uploadFile(file, `${typeStorage}/${fileName}`)
      .then(({ location }: ResponseS3) => {
        this.dispatch(setProcessUploadSlice({ loadingUpload: false, uploadDone: false } as ProcessUpload));
        return location;
      })
      .catch(err => {
        console.error(err);
        this.dispatch(setProcessUploadSlice({ loadingUpload: false, messageUpload: err } as ProcessUpload));
        return false;
      });
  }


}
