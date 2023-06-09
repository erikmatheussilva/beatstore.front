import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Grid } from '@material-ui/core';
import gtm from 'src/lib/gtm';
import Counter from 'src/components/Counter';

const CounterViewIndex: FC = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);
  return (
    <>
      <Helmet><title>Usuários</title></Helmet>
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100%', py: 8 }}>
        <div>
          <main>
            <Grid container>
              <Grid
                item
                xs
                md={1}
              />
              <Grid
                item
                md={11}
              >
                <Counter />
              </Grid>
            </Grid>
          </main>
        </div>
      </Box>
    </>
  );
};

export default CounterViewIndex;
