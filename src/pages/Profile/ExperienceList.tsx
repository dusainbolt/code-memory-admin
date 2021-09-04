import React, { useEffect, useState } from "react";
import Box from "../../common/Box";
import { useAppDispatch, useAppSelector } from "../../redux/rootStore";
import { useTranslation } from "react-i18next";
import Title from "antd/lib/typography/Title";
import { Divider } from "antd";
import { SearchTagListForm } from "../../components/Tag/SearchTagList";
import { Formik } from "formik";
import TableCommon from "../../common/Table";
import { useFormTag, useSearchTagList } from "../../hooks/useTag";
import { getTagSlice } from "../../redux/slices/tagSlice";
import { useColumnTag } from "../../components/Tag/ColumTagList";
import ButtonCommon from "../../common/Button";
import { PlusOutlined } from "@ant-design/icons";
import { DrawerTagForm } from "../../components/Tag/DrawerTagForm";
import { SearchListForm } from "../../components/Profile/ExperienceList/SearchList";
import { useSelector } from "react-redux";
import { DrawerExperienceForm } from "../../components/Profile/ExperienceList/DrawerExperienceForm";
import { useFormExp, useSearchExpList } from "../../hooks/useExperience";
import { getExpSlice, getListExpStart } from "../../redux/slices/experienceSlice";
import { FETCH_POLICY } from "../../constant";
import { Experience, ExperienceStatus, ExperienceType } from "../../models/ExperienceModel";
import { Status } from "../../components/Profile/Status";
import { TypeExp } from "../../components/Profile/ExperienceList/TypeExp";
import moment from "moment";

export const ExperienceList = () => {
  const { t } = useTranslation();
  const { dataExps, isLoadingList, total } = useAppSelector(getExpSlice)
  const { openFormModal, visibleFormExp, setVisible } = useFormExp();
  const dispatch = useAppDispatch();
  const { paramsSearch, handleGetListCategory, getPageIndexNumber, handleSearch, handleChangePage, handleSortByParams } = useSearchExpList(dispatch)
  const { offset, limit } = paramsSearch;



  const column = (t, pageIndex) => [
    {
      title: t("profile.serial"),
      render: (value: any, row: Experience, index: number) => pageIndex+index+1
    },
    {
      title: t("profile.work_place_name_vn"),
      dataIndex: "nameVN",
      key: "nameVN",
    },
    {
      title: t("profile.work_place_name_en"),
      dataIndex: "nameEN",
      key: "nameEN",
    },
    {
      title: t("profile.type"),
      dataIndex: "workType",
      key: "workType",
      render: (value: any, row: Experience)=> <TypeExp status={value}/>
    },
    {
      title: t("profile.position"),
      dataIndex: "position",
      key: "position",
    },
    {
      title: t("profile.time"),
      dataIndex: "time",
      key: "time",
      render: (value: any, row: Experience) => (
        <div>
          {moment.unix(parseInt(row.startTime)).format("DD/MM/YY")} - {moment.unix(parseInt(row.endTime)).format("DD/MM/YY")}         
        </div>
      )
    },
    {
      title: t("profile.status"),
      dataIndex: "status",
      key: "status",
      render: (value: any, row: Experience)=> <Status status={value}/>
    },
    {
      title: t("profile.description_vn"),
      dataIndex: "descriptionVN",
      key: "descriptionVN",
    },
    {
      title: t("profile.description_en"),
      dataIndex: "descriptionEN",
      key: "descriptionEN",
    },
  ];

  return (
    <Box className="admin__content tag-list">
      <Title className="title-page">{t("profile.experience_list")}</Title>
      <Divider />
      <Box className="flx-center space-center control-top">
        <Formik onSubmit={handleSearch} initialValues={paramsSearch}>
          <SearchListForm />
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
          current={offset+1}
          pageSize={limit}
          bordered
          loading={isLoadingList}
          scroll={{ x: 800 }}
          total={total}
          dataSource={dataExps}
          columns={column(t, getPageIndexNumber())}
        />
      </Box>
      <DrawerExperienceForm
        callbackSubmit={handleGetListCategory}
        visible={visibleFormExp}
        setVisible={setVisible}
      />
    </Box>
  );
};
