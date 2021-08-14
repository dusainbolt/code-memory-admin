import { Image } from 'antd';
import React from 'react';
import { Tag } from '../../models/TagModel';
// import { Category } from "redux/category/slice";

export const renderUrlChange = (url: any, createAt: any) => {
  if (!url) return '';
  return `${url}?${createAt}`;
};

export const BoxIconAndName = ({ name = '', tag }: { name: string; tag: Tag }) => {
  return (
    <div className="tag__box-icon">
      <Image preview={false} src={renderUrlChange(tag?.thumbnail, tag?.updatedAt)} />
      <div className="name ml-8">{name}</div>
    </div>
  );
};
