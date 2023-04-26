import { useEffect, useState } from 'react';
import type { FC } from 'react';
import {
  Box,
  Button,
  Drawer,
  Fab,
  TextField,
  Tooltip,
  Typography
} from '@material-ui/core';
import { THEMES } from '../constants';
import useSettings from '../hooks/useSettings';
import AdjustmentsIcon from '../icons/Adjustments';

const getValues = (settings) => (
  {
    compact: settings.compact,
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme
  }
);

const SettingsDrawer: FC = () => {
  const { settings, saveSettings } = useSettings();
  const [open, setOpen] = useState<boolean>(false);
  const [values, setValues] = useState(getValues(settings));

  useEffect(() => {
    setValues(getValues(settings));
  }, [settings]);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleChange = (field, value): void => {
    setValues({
      ...values,
      [field]: value
    });
  };

  const handleSave = (): void => {
    saveSettings(values);
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Opções">
        <Fab
          color="primary"
          onClick={handleOpen}
          size="medium"
          sx={{
            bottom: 0,
            margin: (theme) => theme.spacing(4),
            position: 'fixed',
            right: 0,
            zIndex: (theme) => theme.zIndex.speedDial
          }}
        >
          <AdjustmentsIcon fontSize="small" />
        </Fab>
      </Tooltip>
      <Drawer
        anchor="right"
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: {
            p: 2,
            width: 320
          }
        }}
      >
        <Typography
          color="textPrimary"
          variant="h6"
        >
          Opções
        </Typography>
        <Box sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Tema"
            name="theme"
            onChange={(event): void => handleChange(
              'theme',
              event.target.value
            )}
            select
            SelectProps={{ native: true }}
            value={values.theme}
            variant="outlined"
          >
            {Object.keys(THEMES).map((theme) => (
              <option
                key={theme}
                value={theme}
              >
                {
                  theme
                    .split('_')
                    .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
                    .join(' ')
                }
              </option>
            ))}
          </TextField>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Button
            color="primary"
            fullWidth
            onClick={handleSave}
            variant="contained"
          >
            Salvar
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default SettingsDrawer;
