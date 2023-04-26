import { useRef, useState } from 'react';
import type { FC } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  Box,
  Button,
  ButtonBase,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography,
  Tooltip
} from '@material-ui/core';
import useAuth from '../../hooks/useAuth';
import UserIcon from '../../icons/User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faUsersGear } from '@fortawesome/free-solid-svg-icons';
import DotsHorizontalIcon from 'src/icons/DotsHorizontal';

const AccountPopover: FC = () => {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleLogout = async (): Promise<void> => {
    try {
      handleClose();
      await logout();
      navigate('/');
    } catch (err) {
      console.error(err);
      toast.error('Unable to logout.');
    }
  };

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={handleOpen}
        ref={anchorRef}
        sx={{
          alignItems: 'center',
          display: 'flex'
        }}
      >
        <Tooltip title="Opções">
          <DotsHorizontalIcon fontSize="small" />
        </Tooltip>
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
          sx: { width: 240 }
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            color="textPrimary"
            variant="subtitle2"
          >
            {user.userName}
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ mt: 2 }}>
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
          <MenuItem
            component={RouterLink}
            to="/client"
          >
            <ListItemIcon>
              <FontAwesomeIcon icon={faAddressCard} />
            </ListItemIcon>
            <ListItemText
              primary={(
                <Typography
                  color="textPrimary"
                  variant="subtitle2"
                >
                  Cliente
                </Typography>
              )}
            />
          </MenuItem>
          <MenuItem
            component={RouterLink}
            to="/condosuser"
          >
            <ListItemIcon>
              <FontAwesomeIcon icon={faUsersGear} />
            </ListItemIcon>
            <ListItemText
              primary={(
                <Typography
                  color="textPrimary"
                  variant="subtitle2"
                >
                  Acessos
                </Typography>
              )}
            />
          </MenuItem>
        </Box>
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
      </Popover>
    </>
  );
};

export default AccountPopover;
