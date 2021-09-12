import { Col, Divider, Drawer, Input, Row, Select, Spin } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import { Field, FieldInputProps, FieldMetaProps, Formik, FormikProps, useFormikContext } from 'formik';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { TFunction, useTranslation } from 'react-i18next';
import Box from '../../../common/Box';
import { helper } from '../../../services/helperService';
import clsx from 'clsx';
import { valueFromAST } from 'graphql';
import _ from 'lodash';
import { SelectProps } from 'antd/es/select';
import debounce from 'lodash/debounce';
import { getListTagRequest } from '../../../graphql/tagRequest';
import { SearchTagInput, TagStatus } from '../../../models/TagModel';
import Avatar from 'antd/lib/avatar/avatar';

export interface TechInterface {
  data: any;
  setFieldValue?: any;
  field?: any;
  index: number;
  optionsChoosed?: any;
  setOptionsChoosed?: any;
}

export const Tech: FC<TechInterface> = ({ data, setFieldValue, field, index, optionsChoosed, setOptionsChoosed }) => {
  const removeItem = () => {
    const fieldValue = field.value;
    const optionsChoosedValue = optionsChoosed;
    fieldValue.splice(index, 1);
    optionsChoosed.splice(index, 1);
    setFieldValue(field.name, fieldValue);
    setOptionsChoosed(optionsChoosedValue);
  };

  return (
    <div className="tech">
      <div className="avt-text">
        <Avatar size="small" src={data.thumbnail} />
        <div className="text">{data.title}</div>
      </div>
      {!!field && <CloseCircleOutlined onClick={removeItem} className="close-icon" />}
    </div>
  );
};
