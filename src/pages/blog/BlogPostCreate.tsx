import { useEffect } from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Toolbar,
  Typography,
  IconButton
} from '@material-ui/core';
import { ImportWallet } from '../../components/blog';
import SaveIcon from '../../icons/Save';
import DotsVertical from '../../icons/DotsVertical';
import gtm from '../../lib/gtm';

const BlogPostCreate: FC = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog: Post Create </title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%'
        }}
      >
        <div>
          <Container maxWidth="lg">
            <Toolbar
              disableGutters
              sx={{ py: 2 }}
            >
              <Grid
                alignItems="center"
                container
                justifyContent="space-between"
                spacing={3}
              >
                <Grid item>
                  <Typography
                    color="textPrimary"
                    variant="body2"
                  >
                    Hello, Usuário ADMINISTREI
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    color="primary"
                    component={RouterLink}
                    size="large"
                    to="/blog"
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    component={RouterLink}
                    size="large"
                    startIcon={<SaveIcon />}
                    sx={{ mx: 2 }}
                    to="/blog/1"
                    variant="contained"
                  >
                    Publish Changes
                  </Button>
                  <IconButton edge="end">
                    <DotsVertical fontSize="small" />
                  </IconButton>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </div>
        <Divider />
        <Box sx={{ py: 6 }}>
          <Container maxWidth="lg">
            <ImportWallet />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default BlogPostCreate;
