import { FC } from 'react';
import { AppBar, Box, IconButton, Toolbar } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import type { AppBarProps } from '@material-ui/core';
import MenuIcon from '../../icons/Menu';
// import HeaderLogo from '../HeaderLogo';
import './DashboardNavbar.css';

interface DashboardNavbarProps extends AppBarProps {
  onSidebarMobileOpen?: () => void;
}

const DashboardNavbarRoot = experimentalStyled(AppBar)(({ theme }) => ({
  ...(theme.palette.mode === 'light' && {
    backgroundColor: '#495057',
    boxShadow: 'none',
    color: theme.palette.primary.contrastText,
  }),
  ...(theme.palette.mode === 'dark' && {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: 'none',
  }),
  zIndex: theme.zIndex.drawer + 100,
}));

const DashboardNavbar: FC<DashboardNavbarProps> = (props) => {
  const { onSidebarMobileOpen, ...other } = props;

  return (
    <DashboardNavbarRoot {...other}>
      <Toolbar sx={{ minHeight: 64 }}>
        <IconButton
          color="inherit"
          onClick={onSidebarMobileOpen}
          sx={{
            display: {
              lg: 'none',
            },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <Box
          sx={{
            flexGrow: 1,
            ml: 2,
          }}
        />
      </Toolbar>
    </DashboardNavbarRoot>
  );
};

export default DashboardNavbar;
