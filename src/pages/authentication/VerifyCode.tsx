import { useEffect } from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Card,
  CardContent,
  Button,
  Container,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import { VerifyCodeAmplify } from '../../components/authentication/verify-code';
import useAuth from '../../hooks/useAuth';
import gtm from '../../lib/gtm';
import { makeStyles } from '@material-ui/styles';
import { EmailRounded } from '@material-ui/icons';
import './Login.css';

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      border: 'none'
    }
  }
});

const VerifyCode: FC = () => {
  const classes = useStyles();
  const { platform } = useAuth() as any;

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Verify Code </title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: '#94cab6',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Container
          maxWidth="sm"
          sx={{ py: 10 }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 8
            }}
          />
          <Card
            sx={{
              backgroundColor: '#313131'
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 4
              }}
            >
              <Box
                sx={{
                  marginBottom: 2
                }}
              >
                <Box
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    background: 'white',
                    borderRadius: 100,
                    width: 60,
                    height: 60,
                    margin: '0 auto',
                    display: 'flex'
                  }}
                >
                  <EmailRounded
                    sx={{
                      color: '#34c38f'
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 3
                }}
              >
                <div>
                  <Typography
                    align="center"
                    color="white"
                    gutterBottom
                    variant="h6"
                  >
                    Verifique seu email
                  </Typography>
                  <Typography
                    align="center"
                    color="white"
                    variant="body2"
                  >
                    Entre com o código de 6 dígitos enviado ao exemple@abc.com
                  </Typography>
                  <div className="formVerify">
                    <TextField
                      className={classes.root}
                      style={{ margin: 10, background: 'white', borderRadius: 5 }}
                    />
                    <TextField
                      className={classes.root}
                      style={{ margin: 10, background: 'white', borderRadius: 5 }}
                    />
                    <TextField
                      className={classes.root}
                      style={{ margin: 10, background: 'white', borderRadius: 5 }}
                    />
                    <TextField
                      className={classes.root}
                      style={{ margin: 10, background: 'white', borderRadius: 5 }}
                    />
                    <TextField
                      className={classes.root}
                      style={{ margin: 10, background: 'white', borderRadius: 5 }}
                    />
                    <TextField
                      className={classes.root}
                      style={{ margin: 10, background: 'white', borderRadius: 5 }}
                    />
                  </div>
                  <Box
                    justifyContent="center"
                    sx={{
                      margin: '0 auto',
                      display: 'flex'
                    }}
                  >
                    <Button
                      style={{ backgroundColor: '#34C38F', borderRadius: 4, top: 8, width: 100 }}
                      fullWidth
                      size="medium"
                      type="submit"
                      variant="contained"
                    >
                      Confirmar
                    </Button>
                  </Box>
                </div>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  mt: 3
                }}
              >
                {platform === 'Amplify' && <VerifyCodeAmplify />}
              </Box>

              {platform === 'Amplify' && (
                <Link
                  color="textSecondary"
                  component={RouterLink}
                  to="/authentication/password-recovery"
                  variant="body2"
                >
                  Did you not receive the code?
                </Link>
              )}
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default VerifyCode;
