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
import { CreateTagInput, TagStatus } from '../../models/TagModel';
import { ButtonForm } from '../../common/Button/ButtonForm';
import ValidateService from '../../services/validateService';

const TagForm = ({ t, onCloseForm }: { t: TFunction; onCloseForm: any }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Row className="tag-form form-label-md">
      <Box className="upload__field center-block">
        <Text className="tag-upload-dec">{t('tag.label_thumbnail')}</Text>
        <UploadComponent crop={true} />
      </Box>
      <Field {...fieldCreateTag.title} component={InputComponent} />
      <Field {...fieldCreateTag.description} component={TextAreaComponent} />
      <Field {...fieldCreateTag.status} allowClear={false} component={SelectComponent} />
      <Divider />
      <ButtonForm onClickClose={onCloseForm} onClickSubmit={handleSubmit} />
    </Row>
  );
};

export const DrawerTagForm = ({ visible, setVisible }: { visible: boolean; setVisible: any }) => {
  const { t } = useTranslation();
  const validateTagInput = new ValidateService(t).validateCreateTagInput(fieldCreateTag);

  const initialValues: CreateTagInput = {
    description: '',
    status: TagStatus.ACTIVE,
    thumbnail: '',
    title: '',
  };

  const onCloseDrawer = () => {
    setVisible(false);
  };

  const handleSubmitForm = values => {
    console.log(values);
  };

  return (
    <Drawer title={t('tag.add_tag_title')} maskClosable={false} width={520} closable={true} onClose={onCloseDrawer} visible={visible}>
      <Formik onSubmit={handleSubmitForm} validationSchema={validateTagInput} initialValues={initialValues}>
        <TagForm t={t} onCloseForm={onCloseDrawer} />
      </Formik>
    </Drawer>
  );
};
