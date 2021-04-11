import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from './AppHeader.style';
import { Typography } from '@material-ui/core';

function AppHeader() {
  const classes = useStyles();

  return (
    <div data-testid='AppHeader'>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h6'>Weather App</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppHeader;
