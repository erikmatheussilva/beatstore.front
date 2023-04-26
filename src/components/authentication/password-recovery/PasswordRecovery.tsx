import React, { useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  FormHelperText,
  TextField
} from '@material-ui/core';
import useMounted from '../../../hooks/useMounted';
import gtm from '../../../lib/gtm';
import './PasswordRecovery.css';
import useAuth from 'src/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface IPasswordRecovery { firstCode: string }

const PasswordRecovery = ({ firstCode }: IPasswordRecovery) => {
  const { passwordReset } = useAuth() as any;
  const itemsRef = useRef([]);
  const code = firstCode;
  const strCode = code;
  const mounted = useMounted();
  const navigate = useNavigate();

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, 6);
  }, []);

  return (
    <>
      <div className="formikRecovery">
        <Formik
          initialValues={{
            email: '',
            password: '',
            passwordConfirm: '',
            code: strCode,
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Informe um Email válido!')
              .max(255)
              .required('Insira um Email!'),
            password: Yup.string()
              .min(6, 'A senha precisa conter no mínimo 6 caracteres!')
              .max(64)
              .required('Insira a senha!'),
            passwordConfirm: Yup.string()
              .oneOf([Yup.ref('password'), null], 'As senhas não correspondem!')
              .required('Insira a confirmação de senha!'),
          })}
          onSubmit={async (
            values,
            { setErrors, setStatus, setSubmitting }
          ): Promise<void> => {
            try {
              await passwordReset(values.email, values.password, values.passwordConfirm, values.code);
              setTimeout(() => {
                navigate('/authentication/login');
              }, 5000);
            } catch (err) {
              console.error(err);
              if (mounted.current) {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }): JSX.Element => (
            <form
              noValidate
              onSubmit={handleSubmit}
            >
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Senha"
                margin="normal"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.passwordConfirm && errors.passwordConfirm)}
                fullWidth
                helperText={touched.passwordConfirm && errors.passwordConfirm}
                label="Confirmar senha"
                margin="normal"
                name="passwordConfirm"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.passwordConfirm}
                variant="outlined"
              />
              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>Algo deu errado</FormHelperText>
                </Box>
              )}
              <Box sx={{ mt: 3 }}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Criar senha
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default PasswordRecovery;
