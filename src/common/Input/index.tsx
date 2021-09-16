import React, { useState } from 'react';
import { Input } from 'antd';
import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';
import { FC } from 'react';
import Box from '../Box';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { helper } from '../../services/helperService';

export interface IInputComponent {
  label?: string;
  prefix?: any;
  suffix?: any;
  placeholder?: string;
  className?: string;
  classNameWrap?: string;
  passwordMode?: boolean;
  field?: FieldInputProps<any>;
  form?: FormikProps<any>;
  meta?: FieldMetaProps<any>;
}

export const InputComponent: FC<IInputComponent> = ({
  field,
  form: { touched: formTouched, errors: formErrors, setFieldValue },
  label = '',
  prefix = null,
  suffix = null,
  placeholder = '',
  passwordMode = false,
  className = '',
  classNameWrap = '',
  ...props
}) => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const touched = helper.getValByStrKey(formTouched, field.name);
  const errorMessage = helper.getValByStrKey(formErrors, field.name);
  const InputCommon = passwordMode ? Input.Password : Input;
  const placeHolderDefault = !!label ? t('message.placeholder_default', { label: t(label) }) : '';

  const onChangeInput = ({ target: { value } }) => {
    setValue(value);
  };

  const onBlurInput = ({ target: { value } }) => {
    setFieldValue(field.name, value);
  };

  return (
    <Box className={clsx('field-wrap', [classNameWrap] && classNameWrap)}>
      {label && <label className="field-wrap__label">{t(label)}</label>}
      <InputCommon
        className={clsx('app-input', [className] && className)}
        placeholder={!!placeholder ? t(placeholder) : placeHolderDefault}
        prefix={prefix}
        suffix={suffix}
        {...field}
        {...props}
        value={value || field.value}
        onChange={onChangeInput}
        onBlur={onBlurInput}
      />
      {errorMessage && touched && <span className="required">{errorMessage}</span>}
    </Box>
  );
};
