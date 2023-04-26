import { Button, Grid, Typography } from '@material-ui/core';
import useAuth from '../../../hooks/useAuth';
import { profileBackground } from 'src/images';

const ProfileBox = () => {
  const auth = useAuth();

  return (
    <Grid style={{ height: '100%', position: 'relative' }}>
      <Grid style={{ height: '50%', background: '#74788D', borderRadius: '3px', backgroundImage: `url(${profileBackground}) `, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>
        <Typography pt={4} pl={4}>
          <b>BEM VINDO</b>
        </Typography>
        <Typography pt={1} pl={4}>
          <b>{auth.user.userName}</b>
        </Typography>
      </Grid>
      <Grid style={{ width: '100px', height: '100px', position: 'absolute', borderRadius: '100px', top: '45%', left: '20px', backgroundImage: `url(${auth.user.profilePictureUrl}) `, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', border: 'solid #ffffff 5px' }} />
      <Grid style={{ height: '50%', background: '#ffffff', color: 'pink' }} display="flex" pt={14} pl={4}>
        <Grid style={{ width: '80%' }}>
          <Typography>
            {auth.user.userName}
          </Typography>
          <Typography pt={1}>
            {auth.user.role}
          </Typography>
        </Grid>
        <Grid style={{ width: '30%' }}>
          <Button color="primary" variant="contained">Ver perfil</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileBox;
