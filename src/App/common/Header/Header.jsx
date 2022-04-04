import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyle } from 'App/common/styles';

function Header() {
  const classes = useStyle();

  return (
    <AppBar position="absolute" color="default" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          This is the header
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
