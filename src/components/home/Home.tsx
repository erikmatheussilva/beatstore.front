import { useEffect } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import gtm from '../../lib/gtm';
import './Home.css';
import { Grid } from '@material-ui/core';
// import SongList from './SongList';

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
              sx={{
                paddingLeft: 30
              }}
              md={11}
            >
              <iframe
                title="dormesujoacordalimpo"
                style={{ border: 0, width: 550, height: 486, paddingTop: 180 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=431105452/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
                seamless
              >
                <a href="https://dungeonsounds5551.bandcamp.com/album/dorme-sujo-acorda-limpo">dorme sujo, acorda limpo by dungeonsounds</a>
              </iframe>
              {' '}

            </Grid>
            <Grid
              item
              xs
              md={1}
            />
            <Grid
              item
              md={11}
            >
              <iframe
                title="dormesujoacordalimpo"
                width="90%"
                height="450"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1606454026&color=%235461d1&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
              <div style={{ fontSize: 10, color: 'white', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}>
                <a
                  href="https://soundcloud.com/dngnsnds"
                  title="dungeonsounds"
                  target="_blank"
                  style={{ color: 'white', textDecoration: 'none' }}
                  rel="noreferrer"
                >
                  dungeonsounds
                </a>
                {' '}
                ·
                {' '}
                <a
                  href="https://soundcloud.com/dngnsnds/sets/dorme-sujo-acorda-limpo-ep"
                  title="dorme sujo, acorda limpo (ep)"
                  target="_blank"
                  style={{ color: 'white', textDecoration: 'none' }}
                  rel="noreferrer"
                >
                  dorme sujo, acorda limpo (ep)
                </a>
              </div>
            </Grid>
          </Grid>
        </main>
      </div>
    </>
  );
};

export default Home;
