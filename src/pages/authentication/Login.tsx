import { useEffect } from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  LoginAmplify,
  LoginAuth0,
  LoginJWT
} from '../../components/authentication/login';
import LogoLogin from '../../components/LogoLogin';
import useAuth from '../../hooks/useAuth';
import gtm from '../../lib/gtm';
import './Login.css';
import { Box, Grid } from '@material-ui/core';

const Login: FC = () => {
  const { platform } = useAuth() as any;

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <div>
      <Grid
        className="alinhamento"
      >
        <Helmet title="Login" />
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
              mt: 3,
              margin: 'auto',
            }}
          >
            {platform === 'Amplify' && <LoginAmplify />}
            {platform === 'Auth0' && <LoginAuth0 />}
            {platform === 'JWT' && <LoginJWT />}
          </Box>
        </body>
      </Grid>
    </div>
  );
};

export default Login;
