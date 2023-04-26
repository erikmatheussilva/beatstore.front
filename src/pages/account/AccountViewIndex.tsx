import { useCallback, useEffect, useState } from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Breadcrumbs, Button, Container, Grid, Link, Typography, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { accountApi } from '../../API/AccountApi';
import { AccountListTable } from '../../components/account';
import useMounted from '../../hooks/useMounted';
import useSettings from '../../hooks/useSettings';
import ChevronRightIcon from '../../icons/ChevronRight';
import PlusIcon from '../../icons/Plus';
import gtm from '../../lib/gtm';
import type { Account } from '../../models/account';
import AccountEditModal from 'src/components/account/AccountEditModal';
import Snackbar from '@material-ui/core/Snackbar';

const AccountViewIndex: FC = () => {
  const mounted = useMounted();
  const { settings } = useSettings();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState(false);
  const [openSucess, setOpenSucess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const handleClickOpenSucess = () => {
    setOpenSucess(true);
  };
  const handleCloseSucess = () => {
    setOpenSucess(false);
  };
  const handleClickOpenError = () => {
    setOpenError(true);
  };
  const handleCloseError = () => {
    setOpenError(false);
  };
  // QODELESS [STATE-START {ACCOUNT}] - Campos da Entidade
  const [account, setAccount] = useState<Account>({
    name: '',
    description: '',
    status: 1
  });

  const handleOpen = (): void => {
    setAccount({
      name: '',
      description: '',
      status: 1
    });
    setOpen(true);
  };
  // QODELESS [STATE-END {ACCOUNT}] - Campos da Entidade

  const getAccount = async (accountId: string): Promise<void> => {
    console.log('getAccount ID: ', accountId);
    const data = await accountApi.getAccountById(accountId);
    console.log('getAccount data: ', data);
    setAccount(data);
    setOpen(true);
  };

  const handleClose = (): void => { setOpen(false); };
  const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => { if (reason === 'clickaway') { return; } setSnackbar(false); };
  useEffect(() => { gtm.push({ event: 'page_view' }); }, []);

  const getAccounts = useCallback(async () => {
    try {
      const data = await accountApi.getAccounts();
      console.log('getAccounts: ', data);
      if (mounted.current) {
        setAccounts(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  const deleteAccount = async (accountId: string): Promise<void> => {
    try {
      const data = await accountApi.deleteAccount(accountId);
      handleClickOpenSucess();
      console.log('deleteAccount data: ', data);
      if (data) {
        setSnackbar(true);
      }
      getAccounts();
    } catch (err) {
      handleClickOpenError();
      console.error(err);
    }
  };
  useEffect(() => { getAccounts(); }, [getAccounts]);

  // QODELESS [VIEW INDEX - START {ACCOUNT}] - Tela Principal para Tabelas, Grids, Widgets, Dashboards, etc...)
  return (
    <>
      <Helmet><title>Parceiros</title></Helmet>
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100%', py: 8 }}>
        <Container maxWidth={settings.compact ? 'xl' : false}>
          <Grid
            container
            justifyContent="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Parceiros
              </Typography>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<ChevronRightIcon fontSize="small" />}
                sx={{ mt: 1 }}
              >
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="/dashboard"
                  variant="subtitle2"
                >
                  Dashboard
                </Link>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                >
                  Account
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item>
              <Box sx={{ m: -1 }}>
                <Button
                  color="primary"
                  startIcon={<PlusIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="contained"
                  onClick={handleOpen}
                >
                  Adicionar
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <AccountListTable
              getAccount={getAccount}
              deleteAccount={deleteAccount}
              accounts={accounts}
            />
          </Box>
          <AccountEditModal
            onClose={handleClose}
            open={open}
            account={account}
            setAccount={setAccount}
            postAccount={accountApi.postAccount}
            putAccount={accountApi.putAccount}
          />
          <Snackbar
            open={snackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity="success"
            >
              Deletado com sucesso!
            </Alert>
          </Snackbar>
        </Container>
        <Dialog
          open={openSucess}
          onClose={handleCloseSucess}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            style={{ color: '#4caf50', textAlign: 'center' }}
            id="alert-dialog-title"
          >
            Deletado!
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Deletado com sucesso
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseSucess}
              autoFocus
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openError}
          onClose={handleCloseError}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            style={{ color: '#f44336', textAlign: 'center' }}
            id="alert-dialog-title"
          >
            Erro!
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Não foi possivel deletar.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseError}
              autoFocus
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};
// QODELESS [VIEW INDEX - END {ACCOUNT}] - Tela Principal para Tabelas, Grids, Widgets, Dashboards, etc...)

export default AccountViewIndex;
