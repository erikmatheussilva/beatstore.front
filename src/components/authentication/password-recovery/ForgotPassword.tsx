import React, { useRef } from 'react';
import type { FC } from 'react';
import {
  Box,
  Button,
  TextField,
} from '@material-ui/core';
import { Formik } from 'formik';
import useMounted from 'src/hooks/useMounted';
import * as Yup from 'yup';
import './ForgotPassword.css';
import emailjs from 'emailjs-com';

const FormForgotPassword: FC = (props) => {
  // const [message, changeMessage] = useState('');
  const mounted = useMounted();
  const form = useRef();
  const validationSchema = {
    to_name: Yup.string()
      .required('* Name field is required'),
    reply_to: Yup.string().email('Invalid email address')
      .required('* Email field is required'),
  };
  // const sendEmail = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
  //   emailjs.sendForm('service_l7bog6d', 'template_qhd1x7o', form.current, 'G5LDhW86bBobQcPZS')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // };
  const sendEmail = () => {
    emailjs.sendForm('service_l7bog6d', 'template_qhd1x7o', form.current!, 'G5LDhW86bBobQcPZS')
      .then((result) => {
        console.log(form.current!);
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <Box className="boxForm">
      <div className="ForgotPasswordForm">
        <Formik
          initialValues={{
            to_name: '',
            reply_to: '',
          }}
          validationSchema={Yup.object(validationSchema)}
          onSubmit={(values, {
            setStatus,
            setSubmitting
          }) => {
            try {
              console.log('Values', values);
              console.log('Values true', form.current!,);
              sendEmail();
              if (mounted.current) {
                setStatus({ success: true });
                setSubmitting(false);
              }
            } catch (err) {
              console.error(err);
              setStatus({ success: false });
              setSubmitting(false);
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
              ref={form}
              noValidate
              onSubmit={handleSubmit}
              {...props}
            >
              <h2 className="ForgotPasswordJWTLabel2">Preencha seu nome e email para receber notificações sobre beats novos</h2>
              <TextField
                error={Boolean(touched.to_name && errors.to_name)}
                fullWidth
                helperText={touched.to_name && errors.to_name}
                label="Nome"
                margin="normal"
                name="to_name"
                onBlur={handleBlur}
                onChange={handleChange}
                type="name"
                value={values.to_name}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.reply_to && errors.reply_to)}
                fullWidth
                helperText={touched.reply_to && errors.reply_to}
                label="Email"
                margin="normal"
                name="reply_to"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.reply_to}
                variant="outlined"
              />
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
    </Box>
  );
};

export default FormForgotPassword;
