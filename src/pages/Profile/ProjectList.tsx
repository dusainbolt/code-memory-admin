import React, { useState } from 'react';
import Box from '../../common/Box';
import { useAppDispatch, useAppSelector } from '../../redux/rootStore';
import { useTranslation } from 'react-i18next';
import Title from 'antd/lib/typography/Title';
import { Divider } from 'antd';
import { SearchTagListForm } from '../../components/Tag/SearchTagList';
import { Formik } from 'formik';
import TableCommon from '../../common/Table';
import { useFormTag, useSearchTagList } from '../../hooks/useTag';
import { getTagSlice } from '../../redux/slices/tagSlice';
import { useColumnTag } from '../../components/Tag/ColumTagList';
import ButtonCommon from '../../common/Button';
import { PlusOutlined } from '@ant-design/icons';
import { DrawerTagForm } from '../../components/Tag/DrawerTagForm';
import { Project } from '../../models/ProjectModel';
import { BoxIconAndName } from '../../components/Tag/BoxIconAndName';
import { DrawerProjectForm } from '../../components/Profile/ProjectList/DrawerProjectForm';
import { useFormProject, useSearchPJList } from '../../hooks/useProject';
import { useSearchExpList } from '../../hooks/useExperience';
import { getPJSlice } from '../../redux/slices/projectSlice';

export const ProjectList = () => {
  const dispatch = useAppDispatch();
  const { dataPJs, total, isLoadingList } = useAppSelector(getPJSlice);
  const { openFormModal, visibleFormPJ, setVisible } = useFormProject();
  const { t } = useTranslation();
  const {
    paramsSearch,
    handleSearch,
    getPageIndexNumber,
    handleGetListCategory,
    handleChangePage,
    handleSortByParams,
  } = useSearchPJList(dispatch);
  const { offset, limit } = paramsSearch;

  const column = (t, pageIndex, callbackEdit) => [
    {
      title: t('profile.serial'),
      render: (value: any, row: Project, index: number) => pageIndex + index + 1,
    },
    {
      title: t('profile.project_name_vn'),
      dataIndex: 'nameVN',
      key: 'nameVN',
    },
    {
      title: t('profile.project_name_en'),
      dataIndex: 'nameEN',
      key: 'nameEN',
    },
    {
      title: t('profile.user_size'),
      dataIndex: 'userSize',
      key: 'userSize',
    },
    {
      title: t('profile.technology'),
      dataIndex: 'technology',
      key: 'technology',
    },
    {
      title: t('profile.time'),
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: t('profile.status'),
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: t('profile.description_vn'),
      dataIndex: 'descriptionVN',
      key: 'descriptionVN',
    },
    {
      title: t('profile.description_en'),
      dataIndex: 'descriptionEN',
      key: 'descriptionEN',
    },
    {
      title: t('profile.edit'),
    },
  ];

  return (
    <Box className="admin__content tag-list">
      {console.log(offset, limit, total, dataPJs, column, 'xnxx')}
      <Title className="title-page">{t('menu.project_list')}</Title>
      <Divider />
      <Box className="flx-center space-center control-top">
        <Formik onSubmit={handleSearch} initialValues={paramsSearch}>
          <SearchTagListForm />
        </Formik>
        <ButtonCommon
          onClick={openFormModal}
          className="btn-tag-add"
          loading={isLoadingList}
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          size="middle"
        />
      </Box>
      <Box className="tag-list__table">
        <TableCommon
          onChangeTable={handleSortByParams}
          onChangePagination={handleChangePage}
          current={offset + 1}
          pageSize={limit}
          bordered
          loading={isLoadingList}
          scroll={{ x: 800 }}
          total={total}
          dataSource={dataPJs}
          columns={column(t, 0, () => {})}
        />
      </Box>
      <DrawerProjectForm callbackSubmit={handleGetListCategory} visible={visibleFormPJ} setVisible={setVisible} />
    </Box>
  );
};
