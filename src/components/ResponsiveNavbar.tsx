import { FC, useEffect, useRef, useState } from 'react';
import { AppBar, Box, Button, ButtonBase, Popover, Toolbar } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import type { AppBarProps } from '@material-ui/core';
// import HeaderLogo from '../HeaderLogo';
import './ResponsiveNavbar.css';
import HomeHeaderLogo from './HomeHeaderLogo';
import { Link } from 'react-router-dom';
// import { User } from 'src/models/user';
// import moment from 'moment';
import FormForgotPassword from './authentication/password-recovery/ForgotPassword';

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
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  // const emptyUser: User = {
  //   cpfCnpj: '',
  //   dtBirth: moment(new Date()).format('YYYY-MM-DD'),
  //   email: '',
  //   firstName: '',
  //   userId: '',
  //   roleId: '',
  //   userName: '',
  //   phoneNumber: '',
  //   lastName: '',
  //   role: '',
  //   claims: [],
  // };

  const handleOpenModal = (): void => {
    setOpenModal(true);
  };

  const handleCloseModal = (): void => {
    setOpenModal(false);
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
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', fontWeight: 'bold', marginLeft: '3rem' }}
            >
              Explore
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: { xs: 'none', lg: 'block' }, marginLeft: '40rem' }}>
          <Box
            className={cls}
            component={ButtonBase}
            onClick={handleOpenModal}
            ref={anchorRef}
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Button
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '20px', fontWeight: 'bold' }}
            >
              Sign To Get Free Beats
            </Button>
          </Box>
        </Box>
        <Popover
          anchorEl={anchorRef.current}
          anchorOrigin={{
            horizontal: 'left',
            vertical: 'bottom'
          }}
          anchorReference="none"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          keepMounted
          onClose={handleCloseModal}
          open={openModal}
          PaperProps={{
            sx: { width: 500, height: 500 },
            style: {
              borderRadius: 0,
              boxShadow: '0.4em 0.4em 1em grey'
            }
          }}
        >
          <FormForgotPassword />
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
      </Toolbar>
    </ResponsiveNavbarRoot>
  );
};

export default ResponsiveNavbar;
