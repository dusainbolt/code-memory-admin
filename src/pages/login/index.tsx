import { Formik } from 'formik';
import React from 'react';
import Box from '../../common/Box';
import { LoginInput } from '../../models/LoginModel';

export const LoginPages = () => {
  const loginInput: LoginInput = { credential: '', password: '' };
  // const validateLoginInput = Yup.object({
  //   credential: Yup.string().required(t('message.MSG_1', { fieldName: t('login.credential') })),
  //   password: Yup.string().required(t('message.MSG_1', { fieldName: t('login.password') })),
  // });
  const handleLogin = values => {
    console.log(values);
  };
  return (
    <Box className="login__container">
      123123
      {/* <Formik initialValues={loginInput} onSubmit={handleLogin} validationSchema={validateLoginInput}></Formik> */}
    </Box>
  );
};
