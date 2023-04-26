import { useEffect } from 'react';
import type { FC } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer } from '@material-ui/core';
import type { Theme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useAuth from '../../hooks/useAuth';
import Logo from '../Logo';
import NavSection from '../NavSection';
import Scrollbar from '../Scrollbar';
import { Home } from '@material-ui/icons';
import GroupIcon from '@material-ui/icons/Person';
import CurrencyDollar from 'src/icons/CurrencyDollar';
import DocumentText from 'src/icons/DocumentText';
import Send from '@material-ui/icons/Send';
import toast from 'react-hot-toast';
// import { authApiEx } from 'src/API/AuthApiEx';

interface DashboardSidebarProps {
  onMobileClose: () => void;
  openMobile: boolean;
}

const sections = [
  {
    title: 'CADASTROS',
    items: [
      {
        title: 'Prédios',
        path: '/building',
        icon: <Home fontSize="small" />
      },
      {
        title: 'Moradores',
        path: '/dweller',
        icon: <GroupIcon fontSize="small" />
      },
      {
        title: 'Historico de Cotas',
        path: '/billing',
        icon: <CurrencyDollar fontSize="small" />
      },
      {
        title: 'Simulação de acordo',
        path: '/billing/outstanding',
        icon: <DocumentText fontSize="small" />
      },
      {
        title: 'Condomínios',
        path: '/condo',
        icon: <Home fontSize="small" />
      },
      {
        title: 'Acordos',
        path: '/settle',
        icon: <DocumentText fontSize="small" />
      },
      {
        title: 'Carteira',
        path: '/carteira',
        icon: <DocumentText fontSize="small" />
      },
      {
        title: 'Notificar',
        path: '/cronjobs',
        icon: <Send fontSize="small" />
      },
      {
        title: 'Histórico de acordos',
        path: '/settle/history',
        icon: <DocumentText fontSize="small" />
      },
    ]
  },
];
const DashboardSidebar: FC<DashboardSidebarProps> = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const handleLogout = async (): Promise<void> => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      console.error(err);
      toast.error('Unable to logout.');
    }
  };

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Box
          sx={{
            display: {
              lg: 'none',
              xs: 'flex'
            },
            justifyContent: 'center',
            p: 2
          }}
        >
          <RouterLink to="/">
            <Logo />
          </RouterLink>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                '& + &': {
                  mt: 0
                }
              }}
              {...section}
            />
          ))}
        </Box>
        <Divider />
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
        <Divider />
        <Box sx={{ p: 2 }}>
          <Button
            color="primary"
            fullWidth
            variant="outlined"
            onClick={() => (navigate('/authentication/condo-association-sign'))}
          // const accessToken = await authApiEx.doAuthSupervisory(user.email, user.password).then(
          //   () => {
          // window.sessionStorage.removeItem(accessToken)
          // }
          // );
          >
            Seleção de clientes
          </Button>
        </Box>
      </Scrollbar>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            height: 'calc(100% - 64px) !important',
            top: '64px !Important',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onMobileClose}
      open={openMobile}
      PaperProps={{
        sx: {
          backgroundColor: 'background.paper',
          width: 280
        }
      }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default DashboardSidebar;
