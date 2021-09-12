import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Form,
  FloatingLabel,
} from 'react-bootstrap';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required(),
      password: Yup.string()
        .required(),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, formikBag) => {
      console.log(values, formikBag);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
      <h1 className="text-center mb-4">Войти</h1>
      <FloatingLabel className="mb-3" controlId="floatingInputd" label="Ваш ник">
        <Form.Control
          onChange={formik.handleChange}
          value={formik.values.username}
          type="text"
          name="username"
          placeholder="username"
          isInvalid={!!formik.errors.username}
        />
        {formik.touched.username && formik.errors.username ?
          (<Form.Control.Feedback tooltip type="invalid">{formik.errors.username}</Form.Control.Feedback>) : null}
      </FloatingLabel>
      <FloatingLabel className="mb-4" controlId="floatingPassword" label="Пароль">
        <Form.Control
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          name="password"
          placeholder="Password"
          isInvalid={!!formik.errors.password}
        />
      </FloatingLabel>
      <Button className="w-100 mb-3" variant="outline-primary" type="submit">Войти</Button>
    </Form>
  );
};

export default LoginForm;