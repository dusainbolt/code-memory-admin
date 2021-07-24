import React from 'react';
import { Input } from 'antd';
import { FieldInputProps, FieldMetaProps, FormikState } from 'formik';
import { FC } from 'react';
import Box from '../Box';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
interface IInputComponent {
  label?: string;
  prefix?: any;
  suffix?: any;
  placeholder?: string;
  className?: string;
  classNameWrap?: string;
  passwordMode?: boolean;
  field: FieldInputProps<any>;
  form: FormikState<any>;
  meta: FieldMetaProps<any>;
}

export const InputComponent: FC<IInputComponent> = ({
  field,
  form: { touched: formTouched, errors: formErrors },
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
  const touched = formTouched[field.name];
  const errorMessage = formErrors[field.name];
  const InputCommon = passwordMode ? Input.Password : Input;
  return (
    <Box className={clsx('field-wrap', [classNameWrap] && classNameWrap)}>
      {label && <label className="field-wrap__label">{t(label)}</label>}
      <InputCommon
        className={clsx('app-input', [className] && className)}
        placeholder={t(placeholder)}
        prefix={prefix}
        suffix={suffix}
        {...field}
        {...props}
      />
      {errorMessage && touched && <span className="required">{errorMessage}</span>}
    </Box>
  );
};
