import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core/styles';

const BlogLayoutRoot = experimentalStyled('div')(
  ({ theme }) => (
    {
      backgroundColor: theme.palette.background.default,
      height: '100%'
    }
  )
);

const BlogLayout: FC = () => (
  <BlogLayoutRoot>
    <Outlet />
  </BlogLayoutRoot>
);

export default BlogLayout;
