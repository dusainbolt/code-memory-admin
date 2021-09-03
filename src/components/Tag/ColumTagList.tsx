import dayjs from 'dayjs';
import React from 'react';
import { TFunction } from 'react-i18next';
import { EditOutlined } from '@ant-design/icons';
import { Tag, TagStatus } from '../../models/TagModel';
import { BoxIconAndName } from './BoxIconAndName';
import { TIME_FORMAT } from '../../constant';
import { StatusTag } from './StatusTag';
import { User } from '../../models/UserModel';
import { HelperService } from '../../services/helperService';
import Box from '../../common/Box';
import ButtonCommon from '../../common/Button';
import { ColumnType } from 'antd/lib/table';

const helper = new HelperService();

export const useColumnTag = (t: TFunction, pageIndex: any, callbackEdit: any): ColumnType<any>[] => {
  return [
    {
      title: t('common.table_no'),
      render: (value: any, row: Tag, index: number) => pageIndex + index + 1,
    },
    {
      title: t('tag.tag_name'),
      dataIndex: 'title',
      sorter: true,
      render: (value: any, row: Tag) => <BoxIconAndName name={value} thumbnail={row.thumbnail} updatedAt={row.updatedAt} />,
    },
    {
      title: t('common.description'),
      dataIndex: 'description',
    },
    {
      title: t('common.status'),
      dataIndex: 'status',
      width: 150,
      render: (value: TagStatus) => <StatusTag status={value} />,
    },
    {
      title: t('common.create_by'),
      dataIndex: 'userCreate',
      width: 150,
      render: (userCreate: User) => helper.getFullNameUser(userCreate),
    },
    {
      title: t('common.create_at'),
      dataIndex: 'createdAt',
      sorter: true,
      width: 100,
      render: (value: any) => dayjs(parseInt(value)).format(TIME_FORMAT.DD_MM_YYYY_HH_MM_SS),
    },
    {
      title: '',
      render: (_id: string, row: Tag) => (
        <Box className="flx-center align-left">
          <ButtonCommon onClick={callbackEdit(row)} type="primary" shape="round" icon={<EditOutlined />} size="small" />
        </Box>
      ),
    },
  ];
};
