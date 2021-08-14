import React from 'react';
import Box from '../../common/Box';
import { useAppDispatch, useAppSelector } from '../../redux/rootStore';
import { useTranslation } from 'react-i18next';
import Title from 'antd/lib/typography/Title';
import { Divider } from 'antd';
import { SearchTagListForm } from '../../components/Tag/SearchTagList';
import { Formik } from 'formik';
import TableCommon from '../../common/Table';
import { useSearchTagList } from '../../hooks/useTag';
import { getTagSlice } from '../../redux/slices/tagSlice';
import { useColumnTag } from '../../components/Tag/ColumTagList';

export const TagListPage = () => {
  // const { } = use
  const dataTags = useAppSelector(getTagSlice).dataTags;
  const total = useAppSelector(getTagSlice).total;

  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { paramsSearch, handleSearch, getPageIndexNumber } = useSearchTagList(dispatch);
  const { offset, limit } = paramsSearch;

  const column = useColumnTag(t, getPageIndexNumber());
  console.log(dataTags);
  return (
    <Box className="admin__content tag-list">
      <Title className="title-page">{t('menu.tag_child_list')}</Title>
      <Divider />
      <Formik onSubmit={handleSearch} initialValues={paramsSearch}>
        <SearchTagListForm />
      </Formik>
      <Box className="tag-list__table">
        <TableCommon
          current={offset}
          pageSize={limit}
          bordered
          // onChangeTable={handleSortByParams}
          scroll={{ x: 800 }}
          // onChangePagination={handleChangPageByParams}
          total={total}
          dataSource={dataTags}
          columns={column}
        />
      </Box>
    </Box>
  );
};
