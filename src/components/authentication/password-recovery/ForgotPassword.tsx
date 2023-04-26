import React, { useState } from 'react';
import type { FC } from 'react';
import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Typography,
} from '@material-ui/core';
import { Formik } from 'formik';
import useAuth from 'src/hooks/useAuth';
import useMounted from 'src/hooks/useMounted';
import * as Yup from 'yup';
import './ForgotPassword.css';

const FormForgotPassword: FC = (props) => {
  const { forgotPassword } = useAuth() as any;
  const [message, changeMessage] = useState('');
  const mounted = useMounted();

  return (
    <div className="ForgotPasswordForm">
      <Formik
        initialValues={{
          email: '',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Informe um Email válido!')
            .max(255)
            .required('Insira um Email!'),
        })}
        onSubmit={async (
          values,
          { setErrors, setStatus, setSubmitting }
        ): Promise<void> => {
          try {
            changeMessage('');
            await forgotPassword(values.email);
            setStatus({ success: true });
            changeMessage('Um email para alteração de senha foi enviado!');
            setSubmitting(false);
          } catch (err) {
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
            {...props}
          >
            <h2 className="ForgotPasswordJWTLabel">Recuperação de senha</h2>
            <h2 className="ForgotPasswordJWTLabel2">Preencha seu email para receber um link de recuperação de senha</h2>
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
            {errors.submit && (
              <Box sx={{ mt: 2 }}>
                <FormHelperText error>Algo deu errado</FormHelperText>
              </Box>
            )}
            {message !== '' ? (
              <Typography
                color="#0FAF0F"
                fontSize="14px"
              >
                {message}
              </Typography>
            ) : null}
            <Box sx={{ mt: 2 }}>
              <Button
                style={{ backgroundColor: '#34C38F', borderRadius: 4, top: 8 }}
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Enviar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormForgotPassword;
