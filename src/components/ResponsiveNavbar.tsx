import { FC, useEffect, useRef, useState } from 'react';
import { AppBar, Box, Button, ButtonBase, IconButton, Popover, Toolbar, Typography } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import type { AppBarProps } from '@material-ui/core';
// import HeaderLogo from '../HeaderLogo';
import './ResponsiveNavbar.css';
import HomeHeaderLogo from './HomeHeaderLogo';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

interface ResponsiveNavbarProps extends AppBarProps {
  onSidebarMobileOpen?: () => void;
}

const ResponsiveNavbarRoot = experimentalStyled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  color: theme.palette.primary.contrastText,
}));

const ResponsiveNavbar: FC<ResponsiveNavbarProps> = (props) => {
  const { onSidebarMobileOpen, ...other } = props;
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return (() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });
  const cls = visible ? 'visible' : 'hidden';
  return (
    <ResponsiveNavbarRoot {...other}>
      <Toolbar sx={{ height: 150 }}>
        <Link to="/">
          <HomeHeaderLogo />
        </Link>
        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          <Box
            className={cls}
            component={ButtonBase}
            onClick={onSidebarMobileOpen}
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Button
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', fontWeight: 'bold', marginLeft: '30px' }}
            >
              Explore
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          <Box
            className={cls}
            component={ButtonBase}
            onClick={handleOpen}
            ref={anchorRef}
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Button
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', fontWeight: 'bold', marginLeft: '30px' }}
            >
              Sobre
            </Button>
          </Box>
          <Popover
            anchorEl={anchorRef.current}
            anchorOrigin={{
              horizontal: 'center',
              vertical: 'bottom'
            }}
            keepMounted
            onClose={handleClose}
            open={open}
            PaperProps={{
              sx: { width: 260 }
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                color="textPrimary"
                variant="subtitle2"
                display="inline-flex"
              >
                Hey
                <IconButton
                  sx={{ paddingTop: 0, marginTop: 0, paddingLeft: 2 }}
                  onClick={() => { navigator.clipboard.writeText('toma safadinhaaa'); }}
                >
                  <FontAwesomeIcon icon={faLink} />
                </IconButton>
              </Typography>
            </Box>
            {/* <Divider /> */}
            {/* <Box sx={{ mt: 2 }}>
                <MenuItem
                  component={RouterLink}
                  to="/dashboard/social/profile"
                >
                  <ListItemIcon>
                    <UserIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={(
                      <Typography
                        color="textPrimary"
                        variant="subtitle2"
                      >
                        Perfil
                      </Typography>
                    )}
                  />
                </MenuItem>
              </Box> */}
          </Popover>
        </Box>
      </Toolbar>
    </ResponsiveNavbarRoot>
  );
};

export default ResponsiveNavbar;
