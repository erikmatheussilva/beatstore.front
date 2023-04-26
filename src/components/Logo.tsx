import { Box } from '@material-ui/core';
import type { FC } from 'react';
import logohiphop from '../images/logohiphop.png';

const Logo: FC<any> = (props: any) => (
  <Box {...props}>
    <img
      src={logohiphop}
      alt="Logo"
      width="80%"
      height="50%"
    />
  </Box>
);

export default Logo;
