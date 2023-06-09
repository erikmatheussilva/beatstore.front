import { useEffect } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid } from '@material-ui/core';
import SongList from 'src/components/home/SongList';
import gtm from 'src/lib/gtm';

const Beats: FC = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);
  return (
    <>
      <Helmet>
        <title>dungeonsounds - Beats</title>
      </Helmet>
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
              <SongList />
            </Grid>
          </Grid>
        </main>
      </div>
    </>
  );
};

export default Beats;
