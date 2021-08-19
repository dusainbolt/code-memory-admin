import React from 'react';
import AntImage from '../../common/Image/AntImage';
import { Tag } from '../../models/TagModel';

export const renderUrlChange = (url: any, createAt: any) => {
  if (!url) return '';
  return `${url}?${createAt}`;
};

export const BoxIconAndName = ({ name = '', tag }: { name: string; tag: Tag }) => {
  return (
    <div className="tag__box-icon">
      <AntImage placeholder={true} preview={false} src={renderUrlChange(tag?.thumbnail, tag?.updatedAt)} />
      <div className="name ml-8">{name}</div>
    </div>
  );
};
