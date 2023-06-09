import type { FC } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Drawer, Grid, Typography } from '@material-ui/core';
import CheckIcon from '../../icons/Check';
import TrashIcon from '../../icons/Trash';
import XIcon from '../../icons/X';

interface TableListBulkActionsProps {
  onDelete?: () => void;
  onMarkPaid?: () => void;
  onMarkUnpaid?: () => void;
  open?: boolean;
  selected: string[];
}

const TableListBulkActions: FC<TableListBulkActionsProps> = (props) => {
  const {
    onDelete,
    onMarkPaid,
    onMarkUnpaid,
    open,
    selected,
    ...other
  } = props;

  return (
    <Drawer
      anchor="bottom"
      open={open}
      PaperProps={{ elevation: 1 }}
      variant="persistent"
    >
      <Box
        sx={{ p: 2 }}
        {...other}
      >
        <Grid
          alignItems="center"
          container
          spacing={2}
        >
          <Grid
            item
            md={3}
            sx={{
              display: {
                md: 'block',
                xs: 'none'
              }
            }}
          >
            <Typography
              color="textSecondary"
              variant="subtitle1"
            >
              {selected.length}
              {' '}
              selected
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                '& > * + *': {
                  ml: 2
                }
              }}
            >
              <Button
                color="primary"
                onClick={onMarkPaid}
                startIcon={<CheckIcon fontSize="small" />}
                variant="text"
              >
                OK
              </Button>
              <Button
                color="primary"
                onClick={onMarkUnpaid}
                startIcon={<XIcon fontSize="small" />}
                variant="text"
              >
                Erro
              </Button>
              <Button
                color="primary"
                onClick={onDelete}
                startIcon={<TrashIcon fontSize="small" />}
                variant="text"
              >
                Delete
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
};

TableListBulkActions.propTypes = {
  onDelete: PropTypes.func,
  onMarkPaid: PropTypes.func,
  onMarkUnpaid: PropTypes.func,
  open: PropTypes.bool,
  selected: PropTypes.array.isRequired
};

TableListBulkActions.defaultProps = {
  open: false
};

export default TableListBulkActions;
