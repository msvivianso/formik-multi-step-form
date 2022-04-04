import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import InputField from 'App/common/InputField';

const PersonalInfo = ({ formField: { firstName, lastName } }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PersonalInfo;
