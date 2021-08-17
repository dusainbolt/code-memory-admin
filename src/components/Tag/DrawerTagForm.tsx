import { Divider, Drawer, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import { Field, Formik, useFormikContext } from 'formik';
import React from 'react';
import { TFunction, useTranslation } from 'react-i18next';
import Box from '../../common/Box';
import { InputComponent } from '../../common/Input';
import { TextAreaComponent } from '../../common/Input/TextAreaForm';
import { SelectComponent } from '../../common/Select';
import { UploadComponent } from '../../common/Upload';
import { fieldCreateTag } from '../../models/FieldModel';
import { FormTagInput, TagStatus } from '../../models/TagModel';
import { ButtonForm } from '../../common/Button/ButtonForm';
import ValidateService from '../../services/validateService';
import { useAppDispatch, useAppSelector } from '../../redux/rootStore';
import { getTagSlice, submitFormTagSliceStart } from '../../redux/slices/tagSlice';
import { FETCH_POLICY } from '../../constant';

const TagForm = ({ t, onCloseForm, isLoadingForm }: { t: TFunction; onCloseForm: any; isLoadingForm: boolean }) => {
  const { handleSubmit, setFieldValue } = useFormikContext();

  return (
    <Row className="tag-form form-label-md">
      <Box className="upload__field center-block">
        <Text className="tag-upload-dec">{t('tag.label_thumbnail')}</Text>
        <UploadComponent setFieldValue={setFieldValue} isLoadingForm={isLoadingForm} name={fieldCreateTag.thumbnail.name} crop={true} />
      </Box>
      <Field {...fieldCreateTag.title} component={InputComponent} />
      <Field {...fieldCreateTag.description} component={TextAreaComponent} />
      <Field {...fieldCreateTag.status} allowClear={false} component={SelectComponent} />
      <Divider />
      <ButtonForm loading={isLoadingForm} onClickClose={onCloseForm} onClickSubmit={handleSubmit} />
    </Row>
  );
};

export const DrawerTagForm = ({ visible, setVisible, callbackSubmit }: { visible: boolean; setVisible: any; callbackSubmit: any }) => {
  const { isLoadingForm } = useAppSelector(getTagSlice);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const validateTagInput = new ValidateService(t).validateFormTagInput(fieldCreateTag);

  const initialValues: FormTagInput = {
    description: '',
    status: TagStatus.ACTIVE,
    thumbnail: '',
    title: '',
  };

  const onCloseDrawer = () => {
    setVisible(false);
  };

  const handleSubmitForm = values => {
    dispatch(
      submitFormTagSliceStart({
        input: { ...values, thumbnail: 'https://nftify.s3.ap-southeast-1.amazonaws.com/banner/60efefb91d959f07d8b2f393-1626946787521.jpg' },
        callback: () => callbackSubmit(FETCH_POLICY.NO_CACHE),
      })
    );
  };

  return (
    <Drawer title={t('tag.add_tag_title')} maskClosable={false} width={520} closable={!isLoadingForm} onClose={onCloseDrawer} visible={visible}>
      <Formik onSubmit={handleSubmitForm} validationSchema={validateTagInput} initialValues={initialValues}>
        <TagForm isLoadingForm={isLoadingForm} t={t} onCloseForm={onCloseDrawer} />
      </Formik>
    </Drawer>
  );
};
