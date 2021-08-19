import dayjs from 'dayjs';
import React from 'react';
import { TFunction } from 'react-i18next';
import { EditOutlined } from '@ant-design/icons';
import { Tag, TagStatus } from '../../models/TagModel';
import { BoxIconAndName } from './BoxIconAndName';
import { TIME_FORMAT } from '../../constant';
import { StatusTag } from './StatusTag';
import { User } from '../../models/UserModel';
import { getFullNameUser } from '../../services/utils';
import Box from '../../common/Box';
import ButtonCommon from '../../common/Button';

export const useColumnTag = (t: TFunction, pageIndex: any, callbackEdit: any) => {
  return [
    {
      title: t('common.table_no'),
      render: (value: any, row: Tag, index: number) => pageIndex + index + 1,
    },
    {
      title: t('tag.tag_name'),
      dataIndex: 'title',
      sorter: true,
      render: (value: any, row: Tag) => <BoxIconAndName name={value} tag={row} />,
    },
    {
      title: t('common.description'),
      dataIndex: 'description',
    },
    {
      title: t('common.status'),
      dataIndex: 'status',
      render: (value: TagStatus) => <StatusTag status={value} />,
    },
    {
      title: t('common.create_by'),
      dataIndex: 'userCreate',
      render: (userCreate: User) => getFullNameUser(userCreate),
    },
    {
      title: t('common.create_at'),
      dataIndex: 'createdAt',
      sorter: true,
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
