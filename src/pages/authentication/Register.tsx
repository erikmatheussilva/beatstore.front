import { useEffect } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import gtm from '../../lib/gtm';
import './Register.css';
import { Grid, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import ResponsiveNavbar from 'src/components/ResponsiveNavbar';

const Register: FC = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Cadastro</title>
      </Helmet>
      <div
        className="Register-body"
      >
        <ResponsiveNavbar />
        <main className="Register-main">
          <h3 className="SelectRegisterLabel">Selecione o tipo de cadastro</h3>
          <Grid container>
            <Grid
              item
              xs
              md
            />
            <Grid
              item
              xs
              md={6}
            >
              <Grid
                sx={{ alignItems: 'center' }}
                container
              >
                <Grid
                  item
                  xs
                  md={6}
                >
                  <div className="boxSubscription">
                    <h6 className="labelHeader">ASSESSORIA</h6>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                      <FontAwesomeIcon
                        style={{ color: 'grey', fontSize: 60 }}
                        icon={faUserPlus}
                      />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <Link
                        component={RouterLink}
                        to="/authentication/registeradvice"
                      >
                        <button
                          type="button"
                          className="subscriptionButton"
                        >
                          Clique para cadastro
                        </button>
                      </Link>
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  xs
                  md={6}
                >
                  <div className="boxSubscription">
                    <h6 className="labelHeader">ADMINISTRADOR</h6>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                      <FontAwesomeIcon
                        style={{ color: 'grey', fontSize: 60 }}
                        icon={faChartLine}

                      />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <Link
                        component={RouterLink}
                        to="/authentication/registerdweller"
                      >
                        <button
                          type="button"
                          className="subscriptionButton"
                        >
                          Clique para cadastro
                        </button>
                      </Link>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs
              md
            />
          </Grid>
        </main>
      </div>
      <footer className="Register-footer">
        <h1 className="FooterLabel">
          {(new Date().getFullYear())}
          &copy; QODELESS
        </h1>
      </footer>
    </>
  );
};

export default Register;
