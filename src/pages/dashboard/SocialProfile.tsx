import { useEffect, useState } from 'react';
import type { FC } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Alert,
  Box,
  // Button,
  Container,
  // Grid,
  Snackbar,
  Typography
} from '@material-ui/core';
import gtm from '../../lib/gtm';
import useAuth from 'src/hooks/useAuth';
import { ProfileBg2 } from '../../utils/images';
// import AdviceProfileEditModal from 'src/components/adviceProfile/AdviceProfileEditModal';
// import useMounted from 'src/hooks/useMounted';
// import type { User } from '../../models/user';
// import moment from 'moment';
// import { AdviceProfileListTable } from '../../components/adviceProfile';
// import { aclApi } from 'src/API/ACLApi';
// import PencilAltIcon from '../../icons/PencilAlt';

const SocialProfile: FC = () => {
  const auth = useAuth();
  // const mounted = useMounted();
  // const [open, setOpen] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState(false);
  const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => { if (reason === 'clickaway') { return; } setSnackbar(false); };

  // QODELESS [STATE-START {ACCOUNT}] - Campos da Entidade
  // const emptyUser: User = {
  //   cpfCnpj: '',
  //   dtBirth: moment(new Date()).format('YYYY-MM-DD'),
  //   email: '',
  //   firstName: '',
  //   userId: '',
  //   roleId: '',
  //   userName: '',
  //   phoneNumber: '',
  //   lastName: '',
  //   role: '',
  //   claims: [],
  // };
  // const [user, setUser] = useState<User>(emptyUser);

  // const handleClose = (): void => { setOpen(false); };

  // const getUser = useCallback(async () => {
  //   try {
  //     const data = await aclApi.aclUser();
  //     console.log('getUser: ', data);
  //     if (mounted.current) {
  //       setUser(data);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, [mounted]);

  // useEffect(() => { getUser(); }, [getUser]);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  // const handleOpenModal = (userProp: User): void => {
  //   console.log('userprop', userProp);
  //   setOpen(true);
  // };

  return (
    <>
      <Helmet>
        <title>Perfil</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%'
        }}
      >
        <Box
          style={{ backgroundImage: `url(${ProfileBg2})`, backgroundSize: 'cover' }}
          sx={{
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 150,
            position: 'relative',
            '&:before': {
              backgroundImage: 'linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)',
              content: '" "',
              height: '100%',
              left: 0,
              position: 'absolute',
              top: 0,
              width: '100%'
            },
            '&:hover': {
              '& button': {
                visibility: 'visible'
              }
            }
          }}
        />
        <Container maxWidth="lg">
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              mt: 1,
              position: 'relative'
            }}
          >
            <Box>
              <Typography
                color="textSecondary"
                variant="overline"
              >
                {(auth.user.role === 'ADMIN') ? 'Administrador' : 'Usuário'}
              </Typography>
              <Typography
                color="textPrimary"
                variant="h6"
              >
                {`${auth.user.firstName} ${auth.user.lastName}`}
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
          </Box>
          {/* <Box sx={{ mt: 3 }}>
            <AdviceProfileListTable
              getUser={getUser}
              users={user}
            />
          </Box> */}
          {/* <AdviceProfileEditModal
            onClose={handleClose}
            open={open}
            user={user}
            setUser={setUser}
            aclPutUser={async (x) => {
              await aclApi.aclPutUser(x);
              getUser();
              setOpen(false);
              setSnackbar(true);
            }}
          /> */}
        </Container>
        {/* <Grid item>
          <Box sx={{ m: 2 }}>
            <Button
              color="primary"
              startIcon={<PencilAltIcon fontSize="small" />}
              sx={{ m: 1 }}
              variant="contained"
              id={user.id}
              onClick={() => handleOpenModal(user)}
            >
              Editar perfil
            </Button>
          </Box>
        </Grid> */}
        <Snackbar
          open={snackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
          >
            Salvo com sucesso!
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default SocialProfile;
