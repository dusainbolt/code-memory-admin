import { Col, Row } from 'antd';
import { Field } from 'formik';
import React from 'react';
import { InputComponent } from '../../common/Input';
import { fieldBlog } from '../../models/FieldModel';

export const BlogFormInfo = () => {
  return (
    <Row className="form-input-blog" gutter={[24, 24]}>
      <Col xs={24}>
        <Field {...fieldBlog.title} component={InputComponent} />
      </Col>
      <Col xs={24}>
        <Field {...fieldBlog.description} component={InputComponent} />
      </Col>
    </Row>
  );
};
