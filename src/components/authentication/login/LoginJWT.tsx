import { FC } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  FormHelperText,
  TextField
} from '@material-ui/core';
import useAuth from '../../../hooks/useAuth';
import useMounted from '../../../hooks/useMounted';
import './LoginJWT.css';

const LoginJWT: FC = (props) => {
  const mounted = useMounted();
  const { login } = useAuth() as any;

  return (
    <div className="LoginForm">
      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={
          Yup
            .object()
            .shape({
              email: Yup
                .string()
                .email('Deve ser um email válido')
                .max(255)
                .required('Email é obrigatório para acesso'),
              password: Yup
                .string()
                .max(255)
                .required('Senha é obrigatório para acesso'),
            })
        }
        onSubmit={async (values, {
          setErrors,
          setStatus,
          setSubmitting
        }): Promise<void> => {
          try {
            await login(values.email, values.password);

            if (mounted.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
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
          values
        }): JSX.Element => (
          <form
            noValidate
            onSubmit={handleSubmit}
            {...props}
          >
            <h2 className="LoginJWTLabel">ACESSO AO PORTAL</h2>
            <TextField
              autoFocus
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label="Endereço de email"
              margin="normal"
              name="email"
              placeholder="usuario@email.com"
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
              label="Senha de acesso"
              margin="normal"
              name="password"
              placeholder="Senha"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
              variant="outlined"
            />
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>
                  <span>
                    Algo deu errado
                  </span>
                </FormHelperText>
              </Box>
            )}
            <Box sx={{ mt: 2 }}>
              <Button
                style={{ backgroundColor: '#34C38F', borderRadius: 4, top: 2 }}
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Login
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <a
        className="ForgotPasswordButton2"
        href="/authentication/forgot-password"
      >
        Esqueceu a senha
      </a>
      <a
        className="PrivacyTerms2"
        href="/blog/1"
      >
        Política de privacidade
      </a>
    </div>
  );
};

export default LoginJWT;
