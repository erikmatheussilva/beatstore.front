import type { FC } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Divider,
  Link,
  Typography,
  Button
} from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';

const CardPerfilDweller: FC = () => {
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
                    mt: '-70px'
                  }}
                >
                  <Avatar
                    src={auth.user.avatar}
                    sx={{
                      border: '3px solid #FFFFFF',
                      height: 100,
                      width: 100

                    }}
                  />
                </Box>
                <Link
                  align="center"
                  color="textPrimary"
                  display="block"
                  underline="none"
                  variant="h6"
                >
                  {auth.user.firstName}
                </Link>
                <Typography
                  align="center"
                  variant="body2"
                  color="textSecondary"
                >
                  {auth.user.role}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ m: 1.2, textAlign: 'center' }}>
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

export default CardPerfilDweller;
