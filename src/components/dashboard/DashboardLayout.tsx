import { useState, useCallback } from 'react';
import type { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core/styles';
import SidebarDrawer from './SidebarDrawer';
import ResponsiveNavbar from '../ResponsiveNavbar';

interface DashboardLayoutProps {
  children?: ReactNode;
}

const DashboardLayoutRoot = experimentalStyled('div')(
  ({ theme }) => (
    {
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      height: '100%',
      overflow: 'hidden',
      width: '100%'
    }
  )
);

const DashboardLayoutWrapper = experimentalStyled('div')(
  ({ theme }) => (
    {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
      paddingTop: '64px',
      [theme.breakpoints.up('lg')]: {
        paddingLeft: '280px'
      }
    }
  )
);

const DashboardLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const DashboardLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
  position: 'relative',
  WebkitOverflowScrolling: 'touch'
});

const DashboardLayout: FC<DashboardLayoutProps> = () => {
  const [isSidebarDrawerOpen, setSidebarDrawerOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setSidebarDrawerOpen(!isSidebarDrawerOpen);
  }, [isSidebarDrawerOpen]);

  const handleClose = useCallback(() => {
    setSidebarDrawerOpen(false);
  }, []);

  return (
    <DashboardLayoutRoot>
      <ResponsiveNavbar
        onSidebarMobileOpen={handleToggle}
      />
      <SidebarDrawer
        onClose={handleClose}
        open={isSidebarDrawerOpen}
      />
      <DashboardLayoutWrapper>
        <DashboardLayoutContainer>
          <DashboardLayoutContent>
            <Outlet />
          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;
