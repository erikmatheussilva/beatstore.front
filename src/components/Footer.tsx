import type { FC } from 'react';
import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import MinusIcon from '../icons/Minus';
import FooterLogo from './FooterLogo';

const sections = [

  {
    title: 'Social',
    links: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/the.mostblunted/'
      },
      {
        title: 'SoundCloud',
        href: 'https://www.soundcloud.com/dngnsnds'
      },
      {
        title: 'Bandcamp',
        href: 'https://dungeonsounds5551.bandcamp.com'
      },
      {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/erikmatheussilva/'
      },
    ]
  }
];

const Footer: FC = (props) => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      pb: 2,
      pt: {
        md: 8,
        xs: 6
      }
    }}
    {...props}
  >
    <Container maxWidth="lg">
      <Grid
        container
        maxHeight={100}
        spacing={3}
      >
        <Grid
          item
          md={3}
          sm={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            order: {
              md: 1,
              xs: 4
            }
          }}
          xs={12}
        >
          <FooterLogo height="155px" width="205px" />
          <Typography
            color="textSecondary"
            sx={{ mt: 1 }}
            variant="caption"
          />
        </Grid>
        {sections.map((section, index) => (
          <Grid
            item
            key={section.title}
            md={3}
            sm={4}
            sx={{
              marginLeft: '30rem',
              order: {
                md: index + 2,
                xs: index + 1
              }
            }}
            xs={12}
          >
            <Typography
              color="textSecondary"
              variant="overline"
            >
              {section.title}
            </Typography>
            <List disablePadding>
              {section.links.map((link) => (
                <ListItem
                  disableGutters
                  key={link.title}
                  sx={{
                    pb: 0,
                    pt: 1
                  }}
                >
                  <ListItemAvatar
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      minWidth: 0,
                      mr: 0.5
                    }}
                  >
                    <MinusIcon color="primary" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={(
                      <Link
                        href={link.href}
                        color="textPrimary"
                        variant="subtitle2"
                      >
                        {link.title}
                      </Link>
                    )}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Footer;
