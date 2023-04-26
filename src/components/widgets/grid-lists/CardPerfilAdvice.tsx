import type { FC } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Divider,
  Typography,
} from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';

const CardPerfilAdvice: FC = () => {
  const auth = useAuth();

  return (
    <>
      <Box
        sx={{
          minHeight: '100%',
          justifyContent: 'center',
          maxWidth: '460px',
          margin: '3rem auto',
        }}
      >
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            md={12}
            xs={12}
          >
            <Card>
              <CardMedia
                image="/static/mock-images/covers/cover_2.jpg"
                sx={{ height: 140 }}
              />
              <CardContent sx={{ pt: 0, height: 220 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: '-70px',
                    mb: '-20px'
                  }}
                >
                  <Grid
                    sx={{
                      height: 100,
                      width: 100
                    }}
                  />
                </Box>
                <Typography
                  align="center"
                  color="textPrimary"
                  display="block"
                  variant="h5"
                  paddingTop="8px"
                >
                  {auth.user.firstName}
                </Typography>
                <Typography
                  align="center"
                  color="textSecondary"
                  display="block"
                  variant="h6"
                >
                  {(auth.user.role === 'ADMIN') ? 'Administrador' : 'Usuário'}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ m: 1.2, textAlign: 'center', }}>
                  <Button
                    color="primary"
                    href="/dashboard/social/profile"
                    variant="contained"
                  >
                    Perfil
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CardPerfilAdvice;
