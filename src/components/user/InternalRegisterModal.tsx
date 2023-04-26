import { FC, useState, useRef } from 'react';
import { Box, Dialog, Divider, IconButton, Paper, Typography, Button, Alert, Autocomplete, TextField } from '@material-ui/core';
import XIcon from '../../icons/X';
import Snackbar from '@material-ui/core/Snackbar';
import { Form, Formik, FormikProps } from 'formik';
import InputCustom from '../input/InputCustom';
import * as Yup from 'yup';
// import moment from 'moment';
// import validateCNPJ from '../../utils/validateCNPJ';
import useAuth from 'src/hooks/useAuth';
import { User } from 'src/models/user';
import { cnpj, cpf } from 'cpf-cnpj-validator';
// import { condoApi } from 'src/API/CondoApi';
// import { condoUserApi } from 'src/API/CondoUserApi';
// import validateCPF from 'src/utils/validateCPF';

interface InternalRegisterModalProps { onClose?: () => void; open: boolean; user: User; aclPutUser: any; }

const InternalRegisterModal: FC<InternalRegisterModalProps> = (props) => {
  const { onClose, open, user, aclPutUser, ...other } = props;
  console.log('INTERNAL REGISTER MODAL user: ', user);
  const [snackbar, setSnackbar] = useState(false);
  const { internalRegister } = useAuth() as any;
  const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => { if (reason === 'clickaway') { return; } setSnackbar(false); };
  const formikRef = useRef<FormikProps<any>>();

  const initialValues = {
    email: user.email || '',
    userName: user.userName || '',
    phoneNumber: user.phoneNumber || '',
    cpfCnpj: user.cpfCnpj || '',
    lastName: user.lastName || '',
    firstName: user.firstName || '',
    password: undefined,
    role: user.role || '',
    claims: undefined,
    condoU: {
      id: '',
      condoId: '',
      aspNetUserId: '',
    },
  };
  const [selectedClaims, setSelectedClaims] = useState([]);
  // const [selectedUserCondos, setSelectedUserCondos] = useState([]);

  const validationSchema = {
    email: Yup.string().required('E-mail é obrigatório').email('Deve ser um e-mail válido'),
    userName: Yup.string().required('Nome de usuário é obrigatório'),
    password: undefined,
    phoneNumber: Yup.string().required('Celular é obrigatório').matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, 'Este número não parece com um número de telefone'),
    cpfCnpj: Yup.string().required('CPF / CNPJ é obrigatório').test('cpfCnpj', 'CPF / CNPJ inválido', (cpfCnpj) => cpf.isValid(cpfCnpj) || cnpj.isValid(cpfCnpj)),
    lastName: Yup.string().required('Sobrenome é obrigatório'),
    firstName: Yup.string().required('Nome é obrigatório'),
    role: undefined,
    claims: undefined,
  };

  if (!user.password) {
    initialValues.password = '';
    validationSchema.password = Yup.string().required('Senha é obrigatória').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, 'Deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial (#@$%&*)');
  }

  const readClaims = [
    {
      name: 'Acordos',
      claimType: 'SETTLE',
      claimValue: 'READ'
    },
    {
      name: 'Cotas',
      claimType: 'BILLING',
      claimValue: 'READ'
    },
    {
      name: 'Moradores',
      claimType: 'DWELLER',
      claimValue: 'READ'
    },
    {
      name: 'Unidades',
      claimType: 'BUILDING',
      claimValue: 'READ'
    },
    {
      name: 'Clientes',
      claimType: 'CONDO',
      claimValue: 'READ'
    },
    {
      name: 'Mensageria',
      claimType: 'CRONJOB',
      claimValue: 'READ'
    },
    {
      name: 'Carteira',
      claimType: 'WALLET',
      claimValue: 'READ'
    },
    {
      name: 'Acessos',
      claimType: 'USERS',
      claimValue: 'READ'
    },
  ];

  // const [condosMap, setCondosMap] = useState([]);

  // const getCondo = async () => {
  //   const response = await condoApi.getCondos();
  //   setCondosMap(response);
  // };

  // useEffect(() => { getCondo(); }, []);

  return (
    <Dialog
      onClose={onClose}
      open={open}
      {...other}
    >
      <Paper
        elevation={12}
        sx={{ display: 'flex', flexDirection: 'column', mx: 'auto', outline: 'none', width: 600 }}
      >
        <Formik
          innerRef={formikRef}
          initialValues={initialValues}
          validationSchema={Yup.object(validationSchema)}
          onSubmit={async (values, {
            setStatus,
            setSubmitting
          }): Promise<void> => {
            try {
              if (user.id) {
                await aclPutUser({
                  ...values,
                  claims: selectedClaims,
                }).then(() => {
                  setStatus({ success: true });
                  setSubmitting(false);
                }).catch(() => {
                  setStatus({ success: false });
                  setSubmitting(false);
                });
              } else {
                delete values.id;
                await internalRegister({
                  ...values,
                  claims: selectedClaims,
                }).then(() => {
                  setStatus({ success: true });
                  setSubmitting(false);
                }).catch(() => {
                  setStatus({ success: false });
                  setSubmitting(false);
                });
              }
            } catch (err) {
              console.error(err);
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
              <Box sx={{ alignItems: 'center', display: 'flex', px: 2, py: 1 }}>
                <Typography
                  variant="h6"
                  color="textPrimary"
                >
                  Cadastrar usuário
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton onClick={onClose}><XIcon fontSize="small" /></IconButton>
              </Box>
              <InputCustom
                type="email"
                name="userName"
                value={formikProps.values.userName}
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
                name="email"
                value={formikProps.values.email}
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
              <Autocomplete
                options={readClaims.map((readClaim) => readClaim.name)}
                onChange={async (event: any, value) => {
                  const newValue = readClaims
                    .filter((filter) => value.includes(filter.name))
                    .map((map) => ({
                      claimType: map.claimType,
                      claimValue: map.claimValue
                    }));
                  setSelectedClaims(newValue);
                  console.log(newValue, 'OU ESSE AQUI?');
                }}
                multiple
                limitTags={3}
                includeInputInList
                // defaultValue={}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    size="medium"
                    sx={{
                      margin: '20px',
                    }}
                    fullWidth
                  />
                )}
              />
              {/* <Typography
                gutterBottom
                variant="caption"
                color="textSecondary"
                display="inline-flex"
                paddingLeft={2}
              >
                Condomínios do usuários
              </Typography>
              <Autocomplete
                options={condosMap.map((map) => map.name)}
                onChange={async (event: any, value) => {
                  const newValue = condosMap
                    .filter((filter) => value.includes(filter.name))
                    .map((map) => ({
                      id: map.id,
                    }));
                  const sendValue = [...newValue.map((condo) => ({ condoId: condo.id, aspNetUserId: user.userId }))];
                  setSelectedUserCondos(newValue);
                  console.log('HEEEEEEEEEEEEEEEEEEEEERRRRRRREEEEEEEEEEEEEEEEEEEEE', sendValue);
                  await condoUserApi.postCondoUser(sendValue);
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
                      margin: '20px',
                    }}
                    fullWidth
                  />
                )}
              />
              <Autocomplete
                options={associationsMap.map((map) => map.name)}
                onChange={async (event: any, value) => {
                  const newValue = condosMap
                    .filter((filter) => value.includes(filter.name))
                    .map((map) => ({
                      id: map.id,
                    }));
                  const sendValue = [...newValue.map((condo) => ({ condoId: condo.id, aspNetUserId: user.userId }))];
                  setSelectedUserCondos(newValue);
                  console.log('HEEEEEEEEEEEEEEEEEEEEERRRRRRREEEEEEEEEEEEEEEEEEEEE', sendValue);
                  await condoUserApi.postCondoUser(sendValue);
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
                      margin: '20px',
                    }}
                    fullWidth
                  />
                )}
              /> */}
              {/* <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  ml: -1,
                  mt: 2
                }}
              > */}
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
              {/* </Box> */}
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
              <Divider />
              <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                <Button
                  color="primary"
                  type="submit"
                  variant="contained"
                >
                  Salvar
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
      <Snackbar
        open={snackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
        >
          {' '}
          Salvo com sucesso!
        </Alert>
      </Snackbar>
    </Dialog>
  );
};

export default InternalRegisterModal;
