import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import InputField from 'App/common/InputField';

const ContactInfo = ({ formField: { city, country } }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={city.name} label={city.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={country.name} label={country.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ContactInfo;
