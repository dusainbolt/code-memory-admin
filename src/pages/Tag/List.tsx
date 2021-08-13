import React from 'react';
import Box from '../../common/Box';
import { useAppDispatch, useAppSelector } from '../../redux/rootStore';
import { useTranslation } from 'react-i18next';
import Title from 'antd/lib/typography/Title';
import { Divider } from 'antd';
import { TableTagList } from '../../components/Tag/TableTagList';
import { SearchTagList } from '../../components/Tag/SearchTagList';

export const TagListPage = () => {
  const dispatch = useAppDispatch();
  // const { id } = useAppSelector(state => state.userReducer);
  const { t } = useTranslation();

  return (
    <Box className="admin__content tag-list">
      <Title className="title-page">{t('menu.tag_child_list')}</Title>
      <Divider />
      <SearchTagList />
      <TableTagList />
    </Box>
  );
};
