import { useEffect } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Avatar, Box, Container, Grid, Typography } from '@material-ui/core';
import gtm from '../lib/gtm';
import { Instagram } from '@material-ui/icons';
import Bandcamp from 'src/icons/Bandcamp';
import SoundCloud from 'src/icons/SoundCloud';

const Contact: FC = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const insta = 'https://www.instagram.com/dngnsnds/';
  return (
    <>
      <Helmet>
        <title>dungeonsounds - Contact</title>
      </Helmet>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            lg: 'repeat(2, 1fr)',
            xs: 'repeat(1, 1fr)'
          },
          minHeight: '100%'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.default',
            pt: 8
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              pl: {
                lg: 15
              }
            }}
          >
            <Grid
              sx={{
                paddingTop: 25
              }}
            >
              <Typography
                color="textPrimary"
                sx={{ fontWeight: 'fontWeightBold' }}
                variant="h1"
              >
                Siga dungeonsounds nas redes sociais
              </Typography>
            </Grid>
            <Grid
              container
              sx={{
                alignItems: 'center',
                display: 'flex',
                py: 3,
              }}
            >
              <Grid
                item
                sx={{
                  px: 2
                }}
              >
                <a
                  target="_blank"
                  href={insta}
                  rel="noreferrer"
                >
                  <Avatar
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      mr: 2
                    }}
                    variant="rounded"
                  >
                    <Instagram />
                  </Avatar>
                  <Typography
                    color="textPrimary"
                    variant="overline"
                  >
                    Instagram
                  </Typography>
                </a>

              </Grid>
              <Grid
                sx={{
                  px: 2
                }}
                item
              >
                <a
                  target="_blank"
                  href="https://dungeonsounds5551.bandcamp.com/"
                  rel="noreferrer"
                >
                  <Avatar
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      mr: 2
                    }}
                    variant="rounded"
                  >
                    <Bandcamp />
                  </Avatar>
                  <Typography
                    color="textPrimary"
                    variant="overline"
                  >
                    Bandcamp
                  </Typography>
                </a>

              </Grid>
              <Grid
                sx={{
                  px: 2
                }}
                item
              >
                <a
                  target="blank"
                  href="https://www.instagram.com/dngnsnds/"
                  rel="noreferrer"

                >
                  <Avatar
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      mr: 2
                    }}
                    variant="rounded"
                  >
                    <SoundCloud />
                  </Avatar>
                  <Typography
                    color="textPrimary"
                    variant="overline"
                  >
                    SoundCloud
                  </Typography>
                </a>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
