import { Tag } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { Header } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import { useAppSelector } from '../../redux/rootStore';
import { getFullName } from '../../services/utils';
import Box from '../Box';
import { CheckCircleOutlined } from '@ant-design/icons';

export const HeaderAdmin = () => {
  const user = useAppSelector(state => state.userReducer);
  return (
    <Header className="header">
      <Box className="info-wrap flx-center">
        <Box className="info-wrap__name-tag  mr-10">
          <Title level={4}>{getFullName(user)}</Title>
          <Tag icon={<CheckCircleOutlined />} className="mr-0" color="success">
            ADMIN
          </Tag>
        </Box>
        <Avatar size={40} src={user.avatar} />
      </Box>
    </Header>
  );
};
