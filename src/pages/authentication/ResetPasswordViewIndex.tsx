import { useEffect } from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Box,
} from '@material-ui/core';
import LogoLogin from '../../components/LogoLogin';
import PasswordRecovery from '../../components/authentication/password-recovery/PasswordRecovery';
import gtm from '../../lib/gtm';
import './Login.css';

const ResetPasswordViewIndex: FC = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);
  const query = window.location.search.slice(1);
  const partes = query.split('&');
  const data = {};
  const coder = [];
  partes.forEach((parte) => {
    const chaveValor = parte.split('?');
    const maper = chaveValor.map((x) => x.split('='));
    const code = maper[0];
    coder.push(code);
    const email = maper[1];
    data[0] = { code, email };
  });
  return (
    <>
      <Helmet>
        <title>Criar nova senha </title>
      </Helmet>
      <body className="LoginBody">
        <RouterLink to="/">
          <LogoLogin />
        </RouterLink>
        <div className="LoginBckgImg" />
        <Box
          sx={{
            flexGrow: 1,
            mt: 3
          }}
        >
          <PasswordRecovery firstCode={coder[0][1]} />
        </Box>
      </body>
    </>
  );
};

export default ResetPasswordViewIndex;
