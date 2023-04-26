import { useEffect } from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Box, Grid,
} from '@material-ui/core';
import LogoLogin from '../../components/LogoLogin';
import ForgotPassword from '../../components/authentication/password-recovery/ForgotPassword';
import gtm from '../../lib/gtm';
import './ForgotPasswordViewIndex.css';

const ForgotPasswordViewIndex: FC = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Grid
        className="alinhamento"
      >
        <Helmet>
          <title>Login </title>
        </Helmet>
        <body className="LoginBody">
          <div className="LoginBckgImg" />
          <Grid className="LogoAdm">
            <RouterLink
              to="/"
              className="LogoLogin"
            >
              <LogoLogin />
            </RouterLink>
          </Grid>
          <Box
            sx={{
              flexGrow: 1,
              mt: 3
            }}
          >
            <ForgotPassword />
          </Box>
        </body>
      </Grid>
    </>
  );
};

export default ForgotPasswordViewIndex;
