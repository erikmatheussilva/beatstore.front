import { useEffect } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import gtm from '../../lib/gtm';
import './Home.css';
import { Grid } from '@material-ui/core';
import SongList from './SongList';
import Footer from '../Footer';

const Home: FC = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);
  return (
    <>
      <Helmet>
        <title>dungeonsounds</title>
      </Helmet>
      <div className="Home">
        <main
          className="Home-body"
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

export default Home;
