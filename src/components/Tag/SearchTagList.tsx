import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '../../common/Box';
import { useSearchTagList } from '../../hooks/useTag';

const SearchTagListForm = () => {
  return <Box className="tag-list__form-search">SearchTagList</Box>;
};

export const SearchTagList = () => {
  const { t } = useTranslation();
  const { params, handleSearch } = useSearchTagList();
  return (
    <Formik onSubmit={handleSearch} initialValues={params}>
      <SearchTagListForm />
    </Formik>
  );
};
