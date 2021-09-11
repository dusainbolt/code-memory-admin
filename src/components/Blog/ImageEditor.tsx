import { UploadFile } from 'antd/lib/upload/interface';
import clsx from 'clsx';
import React, { FC } from 'react';
import Box from '../../common/Box';
import { BlogUpload } from '../../common/Upload/BlogUpload';
// import { TextAreaCommon } from '../../common/Input/TextArea';
import { FieldBlogProps } from '../../models/BlogModel';
import { ProcessUpload } from '../../models/LayoutModel';
import { useAppDispatch } from '../../redux/rootStore';
import { setUploadSliceClose, setUploadSliceStart } from '../../redux/slices/layoutSlice';
import { S3Storage, uploadService } from '../../services/uploadService';
// import { Code } from './Code';

export const ImageEditor: FC<FieldBlogProps> = ({ fieldValue, className, callbackChange }) => {
  const dispatch = useAppDispatch();
  const onChangeUploadFile = async (file: UploadFile) => {
    dispatch(setUploadSliceStart({ count: 1, visibleProcessModal: false } as ProcessUpload));
    const urlUpload = await uploadService.handleUpload(file, S3Storage.BLOG);
    dispatch(setUploadSliceClose({}));
    callbackChange({ data: urlUpload });
  };

  return (
    <Box className={clsx('image-editor', [className] && className)}>
      <BlogUpload callbackUpload={onChangeUploadFile} callbackChange={callbackChange} fieldValue={fieldValue} />
    </Box>
  );
};
