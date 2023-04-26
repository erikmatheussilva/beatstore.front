import { FC, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Dialog, Divider, IconButton, Paper, Typography, Button, Alert } from '@material-ui/core';
import XIcon from '../../icons/X';
import type { User } from '../../models/user';
import Snackbar from '@material-ui/core/Snackbar';
import { Form, Formik, FormikProps } from 'formik';
import InputCustom from '../input/InputCustom';
import * as Yup from 'yup';
import validateCPF from '../../utils/validateCPF';
import validateCNPJ from '../../utils/validateCNPJ';

interface UserEditModalProps { onClose?: () => void; setUser: any; postUser: any; putUser: any; open: boolean; user: User; }

const UserEditModal: FC<UserEditModalProps> = (props) => {
  const { onClose, open, user, setUser, postUser, putUser, ...other } = props;
  const [snackbar, setSnackbar] = useState(false);
  const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => { if (reason === 'clickaway') { return; } setSnackbar(false); };
  const formikRef = useRef<FormikProps<any>>();

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
          initialValues={{
            id: user.id || '',
            name: user.name || '',
            cpfCnpj: user.cpfCnpj || '',
            cellPhone: user.cellPhone || '',
            email: user.email || '',
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('O nome é obrigatório'),
            cpfCnpj: Yup.string().required('CPF / CNPJ é obrigatório').test('cpfCnpj', 'CPF / CNPJ inválido', (v) => validateCPF(v) || validateCNPJ(v)),
            cellPhone: Yup.string().required('Celular é obrigatóro'),
            email: Yup.string().required('E-mail é obrigatório').email('Deve ser um e-mail válido'),
          })}
          onSubmit={async (values) => {
            console.log('FORM', values);
            try {
              let data: any;
              if (user.id) {
                data = await putUser({
                  ...user,
                  ...values,
                });
              } else {
                delete values.id;
                data = await postUser({
                  ...values
                });
              }
              onClose();
              if (data) {
                setSnackbar(true);
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
            >
              <Box sx={{ alignItems: 'center', display: 'flex', px: 2, py: 1 }}>
                <Typography
                  variant="h6"
                  color="textPrimary"
                >
                  Morador
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton onClick={onClose}><XIcon fontSize="small" /></IconButton>
              </Box>
              <input
                name="id"
                value={formikProps.values.id}
                type="hidden"
              />
              <InputCustom
                name="name"
                value={formikProps.values.name}
                onChange={formikProps.handleChange}
                label="Nome:"
              />
              <InputCustom
                name="cpfCnpj"
                value={formikProps.values.cpfCnpj}
                onChange={formikProps.handleChange}
                label="CPF / CNPJ:"
                mask={typeof formikProps.values.cpfCnpj === 'string' && formikProps.values.cpfCnpj.replace(/\D/g, '').length < 12 ? '999.999.999-99999' : '99.999.999/9999-99'}
              />
              <InputCustom
                name="cellPhone"
                value={formikProps.values.cellPhone}
                onChange={formikProps.handleChange}
                label="Contato:"
                type="tel"
                mask={typeof formikProps.values.cellPhone === 'string' && formikProps.values.cellPhone.replace(/\D/g, '').length < 11 ? '(99) 9999-99999' : '(99) 9 9999-9999'}
              />
              <InputCustom
                name="dtBirth"
                value={formikProps.values.dtBirth}
                onChange={formikProps.handleChange}
                label="Data de Nascimento:"
                type="date"
              />
              <InputCustom
                name="email"
                value={formikProps.values.email}
                onChange={formikProps.handleChange}
                label="E-mail:"
                type="email"
                autoComplete="email"
              />
              <InputCustom
                type="date"
                name="dueDate"
                value={formikProps.values.dueDate}
                onChange={formikProps.handleChange}
                label="Vencimento da Mensalidade:"
              />
              <InputCustom
                type="select"
                items={[
                  {
                    id: 1,
                    name: 'Pago',
                  },
                  {
                    id: 2,
                    name: 'Em atraso',
                  },
                  {
                    id: 3,
                    name: 'Em acordo',
                  },
                  {
                    id: 4,
                    name: 'Acordo em atraso',
                  },
                  {
                    id: 5,
                    name: 'Pendente',
                  },
                  {
                    id: 6,
                    name: 'A pagar',
                  },
                ]}
                name="status"
                value={formikProps.values.status}
                onChange={formikProps.handleChange}
                label="Status:"
              />
              <InputCustom
                type="money"
                name="monthlyRate"
                value={formikProps.values.monthlyRate}
                onChange={formikProps.handleChange}
                label="Taxa Mensal:"
              />
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
// QODELESS [FORM-END {DWELLER}] - Formulario geral da entidade
UserEditModal.propTypes = { onClose: PropTypes.func, open: PropTypes.bool, user: PropTypes.any, setUser: PropTypes.func, postUser: PropTypes.func, putUser: PropTypes.func, };
UserEditModal.defaultProps = { open: false };
export default UserEditModal;
