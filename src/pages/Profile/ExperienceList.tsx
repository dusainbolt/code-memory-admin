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
import { SearchListForm } from '../../components/Profile/ExperienceList/SearchList';
import { useSelector } from 'react-redux';
import { DrawerExperienceForm } from '../../components/Profile/ExperienceList/DrawerExperienceForm';

export const ExperienceList = () => {
  const { t } = useTranslation();
  const [visibleModal, setVisibleModal] = useState(false)

  const column = [
    {
      title: t("profile.serial"),
      dataIndex: "serial",
      key: "serial"
    },
    {
      title: t("profile.work_place_name_vn"),
      dataIndex: "work_place_name_vn",
      key: "work_place_name_vn"
    },
    {
      title: t("profile.work_place_name_en"),
      dataIndex: "work_place_name_en",
      key: "work_place_name_en"
    },
    {
      title: t("profile.type"),
      dataIndex: "type",
      key: "type"
    },
    {
      title: t("profile.position"),
      dataIndex: "position",
      key: "position"
    },
    {
      title: t("profile.time"),
      dataIndex: "time",
      key: "time"
    },
    {
      title: t("profile.status"),
      dataIndex: "status",
      key: "description_vn"
    },
    {
      title: t("profile.description_vn"),
      dataIndex: "description_vn",
      key: "serial"
    },
    {
      title: t("profile.description_en"),
      dataIndex: "description_en",
      key: "description_en"
    }
  ]

  return (
    <Box className="admin__content tag-list">
      <Title className="title-page">{t('profile.experience_list')}</Title>
      <Divider />
      <Box className="flx-center space-center control-top">
        <Formik onSubmit={()=> {}} initialValues={{}}>
          <SearchListForm />
        </Formik>
        <ButtonCommon
          onClick={()=>{setVisibleModal(true)}}
          className="btn-tag-add"
          loading={false}
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          size="middle"
        />
      </Box>
      <Box className="tag-list__table">
        <TableCommon
          onChangeTable={()=>{}}
          onChangePagination={()=>{}}
          current={1}
          pageSize={10}
          bordered
          loading={false}
          scroll={{ x: 800 }}
          total={0}
          dataSource={[]}
          columns={column}
        />
      </Box>
      <DrawerExperienceForm callbackSubmit={()=>{}} visible={visibleModal} setVisible={()=>{setVisibleModal(!visibleModal)}} />
    </Box>
  );
};
