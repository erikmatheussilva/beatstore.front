import { FC, ReactNode, useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core/styles';
import ResponsiveNavbar from './ResponsiveNavbar';
import SidebarDrawer from './dashboard/SidebarDrawer';
import Footer from './Footer';

interface HomeLayoutProps {
  children?: ReactNode;
}

const HomeLayoutRoot = experimentalStyled('div')(
  ({ theme }) => (
    {
      backgroundColor: theme.palette.background.default,
      height: '100%',
      // paddingTop: 64
    }
  )
);

const HomeLayout: FC<HomeLayoutProps> = () => {
  const [isSidebarDrawerOpen, setSidebarDrawerOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setSidebarDrawerOpen(!isSidebarDrawerOpen);
  }, [isSidebarDrawerOpen]);

  const handleClose = useCallback(() => {
    setSidebarDrawerOpen(false);
  }, []);

  return (
    <HomeLayoutRoot>
      <ResponsiveNavbar
        onSidebarMobileOpen={handleToggle}
      />
      <SidebarDrawer
        onClose={handleClose}
        open={isSidebarDrawerOpen}
      />
      <Outlet />
      <Footer />
    </HomeLayoutRoot>
  );
};

export default HomeLayout;
