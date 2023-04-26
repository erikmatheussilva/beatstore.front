import type { ChangeEvent, FC } from 'react';
import PropTypes from 'prop-types';
import { Select, MenuItem, Box, Dialog, Divider, IconButton, Paper, Typography, Button, Input, Alert } from '@material-ui/core';
import XIcon from '../../icons/X';
import { useEffect, useCallback, useState } from 'react';
import type { Account } from '../../models/account';
import type { EnumType } from '../../models/enums/enumtype';
import Snackbar from '@material-ui/core/Snackbar';
import useMounted from '../../hooks/useMounted';
import { accountApi } from '../../API/AccountApi';

interface AccountEditModalProps { onClose?: () => void; setAccount: any; postAccount: any; putAccount: any; open: boolean; account: Account; }

const AccountEditModal: FC<AccountEditModalProps> = (props) => {
  const { onClose, open, account, setAccount, postAccount, putAccount, ...other } = props;
  const [snackbar, setSnackbar] = useState(false);
  const [enumStatus, setEnumStatus] = useState<EnumType[]>([]);
  const saveAccount = async (): Promise<void> => { try { let data: any; if (account.id) { data = await putAccount(account); } else { data = await postAccount(account); } console.log('saveAccount'); console.log(data); if (data) { setSnackbar(true); } } catch (err) { console.error(err); } };
  const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => { if (reason === 'clickaway') { return; } setSnackbar(false); };

  const mounted = useMounted();

  console.log('getStatusEnums: ', enumStatus);
  const getStatusEnums = useCallback(async () => {
    try {
      const data = await accountApi.getStatusEnums();
      console.log('getStatusEnums: ', data);
      if (mounted.current) {
        setEnumStatus(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => { getStatusEnums(); }, [getStatusEnums]);

  // QODELESS [TARGET-START {ACCOUNT}] - Mapeamento para CADA campo
  const updateName = (event: ChangeEvent<HTMLInputElement>): void => { setAccount({ ...account, name: event.target.value }); };
  const updateDescription = (event: ChangeEvent<HTMLInputElement>): void => { setAccount({ ...account, description: event.target.value }); };
  const updateStatus = (event: React.ChangeEvent<{ value: unknown }>) => { setAccount({ ...account, status: event.target.value }); };
  // QODELESS [TARGET-END {ACCOUNT}] - Mapeamento para CADA campo

  // QODELESS [FORM-START {ACCOUNT}] - Formulario geral da entidade
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
        <Box sx={{ alignItems: 'center', display: 'flex', px: 2, py: 1 }}>
          <Typography
            variant="h6"
            color="textPrimary"
          >
            Account - Seu Título Aqui
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={onClose}><XIcon fontSize="small" /></IconButton>
        </Box>
        <Input
          disableUnderline
          fullWidth
          placeholder="Parceiro"
          sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}
          value={account.name}
          onChange={updateName}
        />
        <Input
          disableUnderline
          fullWidth
          placeholder="Descrição"
          sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}
          value={account.description}
          onChange={updateDescription}
        />
        <Select
          onChange={updateStatus}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value="">Selecione ....</MenuItem>
        </Select>
        <Divider />
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <Button
            color="primary"
            variant="contained"
            onClick={saveAccount}
          >
            Salvar
          </Button>
        </Box>
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
// QODELESS [FORM-END {ACCOUNT}] - Formulario geral da entidade
AccountEditModal.propTypes = { onClose: PropTypes.func, open: PropTypes.bool, account: PropTypes.any, setAccount: PropTypes.func, postAccount: PropTypes.func, putAccount: PropTypes.func, };
AccountEditModal.defaultProps = { open: false };
export default AccountEditModal;
