import { useEffect } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import './Beats.css';
import { Grid } from '@material-ui/core';
import Footer from 'src/components/Footer';
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
      <div className="Beats">
        <main
          className="Beats-body"
        >
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
        <Footer />
      </div>
    </>
  );
};

export default Beats;
