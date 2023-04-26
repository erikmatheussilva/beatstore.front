import { useEffect } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import useSettings from '../../hooks/useSettings';
import gtm from '../../lib/gtm';
import CardPerfilAdvice from 'src/components/widgets/grid-lists/CardPerfilAdvice';
import useAuth from 'src/hooks/useAuth';

const Overview: FC = () => {
  const { settings } = useSettings();
  const { user } = useAuth();

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <Typography
          color="textPrimary"
          variant="h5"
          display="block"
          marginLeft={5}
          paddingTop={3}
        >
          {`Olá, ${user.firstName}.`}
        </Typography>
      </div>
      <div>
        <CardPerfilAdvice />
      </div>
      <Box
        sx={{
          minHeight: '100%',
          py: 2
        }}
      >
        <Container maxWidth={settings.compact ? 'xl' : false}>
          <Grid
            container
            spacing={1}
          >
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              />
            </Grid>
            {/* fim segunda linha */}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Overview;
