import { useEffect } from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Box,
} from '@material-ui/core';
import {
  RegisterAmplify,
  RegisterAuth0,
  RegisterFirebase,
  RegisterJWTAdvice
} from '../../components/authentication/register';
import useAuth from '../../hooks/useAuth';
import gtm from '../../lib/gtm';
import LogoLogin from '../../components/LogoLogin';
import './RegisterAdvice.css';

const RegisterAdvice: FC = () => {
  const { platform } = useAuth() as any;

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Cadastre-se</title>
      </Helmet>
      <body className="RegisterAdviceBody">
        <div className="DivBckgImg">
          <div className="RegisterAdviceBckgImg" />
        </div>
        <div className="LogoRegisterAdvice">
          <RouterLink to="/">
            <LogoLogin />
          </RouterLink>
        </div>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          {platform === 'Amplify' && <RegisterAmplify />}
          {platform === 'Auth0' && <RegisterAuth0 />}
          {platform === 'Firebase' && <RegisterFirebase />}
          {platform === 'JWT' && <RegisterJWTAdvice />}
        </Box>
      </body>
    </>
  );
};

export default RegisterAdvice;
