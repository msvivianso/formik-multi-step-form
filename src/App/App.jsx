import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from 'App/common/Header';
import Footer from 'App/common/Footer';
import { theme } from 'App/common/styles';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <MainPage />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
