import React from 'react';
import { Link, Typography } from '@material-ui/core/';

function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright ©
      <Link color="inherit" href="https://material-ui.com/">
        Your Footer
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default Footer;
