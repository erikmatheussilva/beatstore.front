import { FC, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, FormikProps } from 'formik';
import {
  Box,
  Button,
} from '@material-ui/core';
import useAuth from '../../../hooks/useAuth';
import useMounted from '../../../hooks/useMounted';
import InputCustom from '../../input/InputCustom';
import './RegisterJWTDweller.css';
import { Navigate } from 'react-router-dom';
import { cpf, cnpj } from 'cpf-cnpj-validator';

const RegisterJWTDweller: FC = (props) => {
  const mounted = useMounted();
  const { register } = useAuth() as any;
  const [redirect, setRedirect] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const formikRef = useRef<FormikProps<any>>();
  // const [condosMap, setCondosMap] = useState([]);

  if (redirect) {
    return (<Navigate to="/dashboard" />);
  }
  return (
    <div className="RegisterDwellerForm">
      <Formik
        innerRef={formikRef}
        initialValues={{
          email: '',
          userName: '',
          phoneNumber: '',
          cpfCnpj: '',
          lastName: '',
          firstName: '',
          password: undefined,
          role: '',
          claims: undefined,
        }}
        validationSchema={Yup.object({
          email: Yup.string().required('E-mail é obrigatório').email('Deve ser um e-mail válido'),
          userName: Yup.string().required('Nome de usuário é obrigatório'),
          password: undefined,
          phoneNumber: Yup.string().required('Celular é obrigatório').matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, 'Este número não parece com um número de telefone'),
          cpfCnpj: Yup.string().required('CPF / CNPJ é obrigatório').test('cpfCnpj', 'CPF / CNPJ inválido', (cpfCnpj) => cpf.isValid(cpfCnpj) || cnpj.isValid(cpfCnpj)),
          lastName: Yup.string().required('Sobrenome é obrigatório'),
          firstName: Yup.string().required('Nome é obrigatório'),
          role: undefined,
          claims: undefined,
        })}
        onSubmit={async (values, {
          setStatus,
          setSubmitting
        }): Promise<void> => {
          try {
            await register({
              ...values,
              claims: [],
            });

            if (mounted.current) {
              setStatus({ success: true });
              setSubmitting(false);
              setRedirect(true);
            }
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setSubmitting(false);
          }
        }}
      >
        {(formikProps) => (
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              formikProps.handleSubmit(event);
            }}
            data-private
            {...props}
          >
            <h2 className="RegisterJWTDwellerLabel">CADASTRAR NOVO USUÁRIO</h2>
            <InputCustom
              type="email"
              name="email"
              value={formikProps.values.email}
              onChange={formikProps.handleChange}
              label="E-mail de acesso:"
            />
            <InputCustom
              type="password"
              name="password"
              value={formikProps.values.password}
              onChange={formikProps.handleChange}
              label="Senha:"
            />
            <InputCustom
              name="firstName"
              value={formikProps.values.firstName}
              onChange={formikProps.handleChange}
              label="Nome:"
            />
            <InputCustom
              name="lastName"
              value={formikProps.values.lastName}
              onChange={formikProps.handleChange}
              label="Sobrenome:"
            />
            <InputCustom
              name="userName"
              value={formikProps.values.userName}
              onChange={formikProps.handleChange}
              label="E-mail para contato:"
              type="email"
              autoComplete="email"
            />
            <InputCustom
              name="cpfCnpj"
              value={formikProps.values.cpfCnpj}
              onChange={formikProps.handleChange}
              label="CPF/CNPJ:"
              mask={typeof formikProps.values.cpfCnpj === 'string' && formikProps.values.cpfCnpj.replace(/\D/g, '').length < 14 ? '999.999.999-99999' : '99.999.999/9999-99'}
            />
            <InputCustom
              name="phoneNumber"
              value={formikProps.values.phoneNumber}
              onChange={formikProps.handleChange}
              label="Contato:"
              type="tel"
              mask={typeof formikProps.values.phoneNumber === 'string' && formikProps.values.phoneNumber.replace(/\D/g, '').length < 11 ? '(99) 9999-99999' : '(99) 9 9999-9999'}
            />
            <InputCustom
              name="role"
              type="select"
              items={[
                {
                  id: 'BILLINGADVICE',
                  name: 'Assessoria',
                },
                {
                  id: 'ADMIN',
                  name: 'Administrador',
                },
              ]}
              value={formikProps.values.role}
              onChange={formikProps.handleChange}
              label="Tipo do usuário:"
            />
            {/* <Autocomplete
              options={condosMap.map((map) => map.name)}
              onChange={async (event: any, value) => {
                const newValue = condosMap
                  .filter((filter) => value.includes(filter.name))
                  .map((map) => ({
                    id: map.id,
                  }));
                setSelectedUserCondos(newValue);
y
                console.log('HEEEEEEEEEEEEEEEEEEEEERRRRRRREEEEEEEEEEEEEEEEEEEEE', newValue);
              }}
              multiple
              limitTags={3}
              includeInputInList
              defaultValue={selectedUserCondos.map((x) => x.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  size="medium"
                  sx={{
                    marginLeft: '20px',
                    width: '280px'
                  }}
                  fullWidth
                />
              )}
            /> */}
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1,
                mt: 2
              }}
            >
              {/* <Checkbox
                checked={values.policy}
                color="primary"
                name="policy"
                onChange={handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                I have read the
                {' '}
                <Link
                  color="primary"
                  component="a"
                  href="#"
                >
                  Terms and Conditions
                </Link>
              </Typography> */}
            </Box>
            {/* {Boolean(touched.policy && errors.policy) && (
              <FormHelperText error>
                {errors.policy}
              </FormHelperText>
            )}
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>
                 <span>
  Algo deu errado
</span>
                </FormHelperText>
              </Box>
            )} */}
            <div className="DivPolicyButton">
              <input
                type="checkbox"
                checked={activeButton}
                onChange={() => setActiveButton(!activeButton)}
              />
              <a
                className="PolicyButton2"
                href="/blog/1"
              >
                Aceito termos de uso e política de privacidade
              </a>
            </div>
            <Box sx={{ mt: 4 }}>
              <Button
                disabled={!activeButton}
                style={{ backgroundColor: '#34C38F', borderRadius: 4, top: 8 }}
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Cadastre-se
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterJWTDweller;
