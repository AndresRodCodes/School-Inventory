import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { lighten, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import InventoryTableSearch from './InventoryTableSearch';
import Grid from '@material-ui/core/Grid'

const useToolbarStyles = makeStyles((theme) => ({
    root: {
      flexFlow: '1 1 100%',
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
  }));

const EnhancedTableToolbar = ({ numSelected }) => {
    const classes = useToolbarStyles();
  
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        <Grid container className={classes.root} direction='row' justify='space-between' spacing={1}>
          <Grid item xs={4}>
            {numSelected > 0 ? (
            <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
              {numSelected} selected
            </Typography>
          ) : (
              <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
              Device Inventory
            </Typography>
          )}
          </Grid>
          <Grid item xs={4}>
            {numSelected > 0 ? "" : (<InventoryTableSearch/>)}
          </Grid>
          <Grid item xs={4}>
            {numSelected > 0 ? (
              <Tooltip title="Delete">
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
                ) : (
              <Tooltip title="Filter list">
                <IconButton aria-label="filter list">
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    );
  };
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

  export default EnhancedTableToolbar