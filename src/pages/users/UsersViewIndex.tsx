import { useCallback, useEffect, useState } from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Breadcrumbs, Container, Grid, Link, Typography, Alert } from '@material-ui/core';
import gtm from '../../lib/gtm';
import useMounted from '../../hooks/useMounted';
import useSettings from '../../hooks/useSettings';
// import { UserListTable } from '../../components/user';
import type { User } from '../../models/user';
// import PlusIcon from '../../icons/Plus';
import ChevronRightIcon from '../../icons/ChevronRight';
// import UserEditModal from '../../components/user/UserEditModal';
import Snackbar from '@material-ui/core/Snackbar';
import { aclApi } from '../../API/ACLApi';

const UsersViewIndex: FC = () => {
  const mounted = useMounted();
  const { settings } = useSettings();
  // const [open, setOpen] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState(false);
  // const [openSucess, setOpenSucess] = useState(false);
  // const [openError, setOpenError] = useState(false);
  // const handleClickOpenSucess = () => {
  //   setOpenSucess(true);
  // };
  // const handleCloseSucess = () => {
  //   setOpenSucess(false);
  // };
  // const handleClickOpenError = () => {
  //   setOpenError(true);
  // };
  // const handleCloseError = () => {
  //   setOpenError(false);
  // };

  // QODELESS [STATE-START {ACCOUNT}] - Campos da Entidade
  // const [dweller, setDweller] = useState<Dweller>({
  //   name: '',
  //   cpfCnpj: '',
  //   cellPhone: '',
  //   email: '',
  //   status: 1,
  //   buildingId: '',
  //   buildingName: '',
  //   monthlyRate: 0
  // });

  // QODELESS [STATE-START {USERS}] - Campos da Entidade
  const [users, setUsers] = useState<User[]>([]);

  // const handleOpen = (): void => {
  //   setDweller({
  //     name: '',
  //     cpfCnpj: '',
  //     cellPhone: '',
  //     email: '',
  //     status: 1,
  //     buildingId: '',
  //     buildingName: '',
  //     monthlyRate: 0
  //   });
  //   setOpen(true);
  // };
  // QODELESS [STATE-END {ACCOUNT}] - Campos da Entidade

  // const getDweller = async (dwellerId: string): Promise<void> => {
  //   const data = await dwellerApi.getDwellerById(dwellerId);
  //   setDweller(data);
  //   setOpen(true);
  // };

  // const handleClose = (): void => { setOpen(false); };
  const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => { if (reason === 'clickaway') { return; } setSnackbar(false); };
  useEffect(() => { gtm.push({ event: 'page_view' }); }, []);

  const getUsers = useCallback(async () => {
    try {
      const data = await aclApi.aclUsers();
      console.log('api: ', data);
      if (mounted.current) {
        setUsers(data);
        console.log('u:', users);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => { getUsers(); }, [getUsers]);

  // const getDwellers = useCallback(async () => {
  //   try {
  //     const data = await dwellerApi.getDwellers();
  //     console.log('getDwellers: ', data);
  //     if (mounted.current) {
  //       setDwellers(data);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, [mounted]);

  // const deleteDweller = async (dwellerId: string): Promise<void> => {
  //   try {
  //     const data = await dwellerApi.deleteDweller(dwellerId);
  //     handleClickOpenSucess();
  //     console.log('deleteDweller data: ', data);
  //     if (data) {
  //       setSnackbar(true);
  //     }
  //     getDwellers();
  //   } catch (err) {
  //     handleClickOpenError();
  //     console.error(err);
  //   }
  // };

  // useEffect(() => { getDwellers(); }, [getDwellers]);
  // console.log(users, setDwellers(null));
  // QODELESS [VIEW INDEX - START {ACCOUNT}] - Tela Principal para Tabelas, Grids, Widgets, Dashboards, etc...)
  return (
    <>
      <Helmet><title>Usuários</title></Helmet>
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
                Lista de usuários
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
                  Usuários
                </Typography>
              </Breadcrumbs>
            </Grid>
            {/* <Grid item>
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
            </Grid> */}
          </Grid>
          {/* <Box sx={{ mt: 3 }}>
            <UserListTable
              getDweller={getDweller}
              deleteDweller={deleteDweller}
              getDwellers={getDwellers}
              dwellers={dwellers}
            />
          </Box>
          <UserEditModal
            onClose={handleClose}
            open={open}
            dweller={dweller}
            setDweller={setDweller}
            postDweller={dwellerApi.postDweller}
            putDweller={dwellerApi.putDweller}
          /> */}
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
        {/* <Dialog
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
        </Dialog> */}
      </Box>
    </>
  );
};
// QODELESS [VIEW INDEX - END {ACCOUNT}] - Tela Principal para Tabelas, Grids, Widgets, Dashboards, etc...)

export default UsersViewIndex;
