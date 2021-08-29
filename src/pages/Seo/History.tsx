import { Divider, Tag } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import { useAppSelector } from '../../redux/rootStore';
import Box from '../../common/Box';
import { useTranslation } from 'react-i18next';

export const SeoHistory = () => {
  const user = useAppSelector(state => state.loginSlice.user);
  const { t } = useTranslation();

  return (
    <Box className="admin__content seo-page">
      <Title className="title-page">{t('seo.title_page')}</Title>
      <Divider />
    </Box>
  );
};
