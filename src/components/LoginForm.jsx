import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Form,
  FloatingLabel,
} from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import routes from '../routes.js';

import useAuth from '../hooks/index.jsx';

const ControlInvalidFeedback = ({ error }) => (
  <Form.Control.Feedback tooltip type="invalid">{error}</Form.Control.Feedback>
);

const LoginForm = () => {
  const auth = useAuth();
  const [authFailed, setAuthFailed] = useState(false);
  const location = useLocation();
  const history = useHistory();
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
    onSubmit: async (values) => {
      try {
        setAuthFailed(false);
        const res = await axios.post(routes.loginPath(), values);
        console.log(res);
        localStorage.setItem('userId', JSON.stringify(res.data));
        auth.logIn();
        const { from } = location.state || { from: { pathname: '/' } };
        history.replace(from);
      } catch (e) {
        setAuthFailed(true);
        console.log(e);
        throw e;
      }
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
          isInvalid={authFailed}
        />
      </FloatingLabel>
      <FloatingLabel className="mb-4" controlId="floatingPassword" label="Пароль">
        <Form.Control
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          name="password"
          placeholder="Password"
          isInvalid={authFailed}
        />
        {authFailed
          ? <ControlInvalidFeedback error="Неверные имя пользователя или пароль" />
          : null}
      </FloatingLabel>
      <Button className="w-100 mb-3" variant="outline-primary" type="submit">Войти</Button>
    </Form>
  );
};

export default LoginForm;
