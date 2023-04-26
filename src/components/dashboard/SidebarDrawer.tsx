import { Box, ListItem, Divider, Button, Drawer, Typography } from '@material-ui/core';
import * as React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { sidebarConfig, offlineSidebarConfig } from 'src/config';
import Logo from '../Logo';
import toast from 'react-hot-toast';
import useAuth from 'src/hooks/useAuth';

const SidebarDrawer = (props: { open: boolean, onClose: any }) => {
  const { open, onClose } = props;
  const { logout, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const handleLogout = async (): Promise<void> => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      console.error(err);
      toast.error('Unable to logout.');
    }
  };
  const loggedContent = (
    <>
      <Box
        sx={{
          height: '100%',
        }}
      >
        <Box sx={{ marginLeft: '44px', paddingLeft: '15px' }}>
          <Link to="/dashboard/">
            <Logo />
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1 }}>

          {sidebarConfig.map((item: any) => (

            <ListItem
              disableGutters
              sx={{
                display: 'flex',
                mb: 0.5,
                py: 0,
                px: 2
              }}
            >
              <NavLink
                to={item.path}
                style={{
                  marginBottom: '0.5rem',
                  textDecoration: 'none',
                }}
              >
                <Typography
                  fontWeight="bold"
                  color="text.secondary"
                  sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {item.icon}
                  {item.title}
                </Typography>
              </NavLink>
            </ListItem>
          ))}
        </Box>
        <Divider sx={{ borderColor: 'lightgrey' }} />
        <Box sx={{ p: 2 }}>
          <Button
            color="primary"
            fullWidth
            onClick={handleLogout}
            variant="outlined"
          >
            Logout
          </Button>
        </Box>
      </Box>
    </>
  );
  const offlineContent = (
    <>
      <Box
        sx={{
          height: '100%',
        }}
      >
        <Box sx={{ marginLeft: '44px', paddingLeft: '15px' }}>
          <Link to="/dashboard/">
            <Logo />
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1 }}>

          {offlineSidebarConfig.map((item: any) => (

            <ListItem
              disableGutters
              sx={{
                display: 'flex',
                mb: 0.5,
                py: 0,
                px: 2
              }}
            >
              <NavLink
                to={item.path}
                style={{
                  marginBottom: '0.5rem',
                  textDecoration: 'none',
                }}
              >
                <Typography
                  fontWeight="bold"
                  color="text.secondary"
                  sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {item.icon}
                  {item.title}
                </Typography>
              </NavLink>
            </ListItem>
          ))}
        </Box>
      </Box>
    </>
  );

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme: any) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {(isAuthenticated) ? loggedContent : offlineContent}
    </Drawer>
  );
};
export default SidebarDrawer;
