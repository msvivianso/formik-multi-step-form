import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from 'App/common/Header';
import Footer from 'App/common/Footer';
import { theme, useStyle } from 'App/common/styles';
import MainPage from './pages/MainPage';

const App = (props) => {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <MainPage />
        </Paper>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
