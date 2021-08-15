import { Drawer, Row } from 'antd';
import { Formik } from 'formik';
import React from 'react';
import { UploadComponent } from '../../common/Upload';
import { CreateTagInput } from '../../models/TagModel';

const TagForm = () => {
  return (
    <Row>
      <Row>
        <UploadComponent crop={true} />
      </Row>
    </Row>
  );
};

export const DrawerTagForm = ({ visible, setVisible }: { visible: boolean; setVisible: any }) => {
  const initialValues: CreateTagInput = {
    description: '',
    status: null,
    thumbnail: '',
    title: '',
  };

  const onCloseDrawer = () => {
    setVisible(false);
  };

  const handleSubmitForm = values => {};

  return (
    <Drawer title="Multi-level drawer" maskClosable={false} width={520} closable={true} onClose={onCloseDrawer} visible={visible}>
      <Formik onSubmit={handleSubmitForm} initialValues={initialValues}>
        <TagForm />
      </Formik>
    </Drawer>
  );
};
