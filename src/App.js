import { Grid } from '@mui/material';
import React from 'react';
import Header from './components/Header';
import ParentComponent from './components/ParentComponent';


const App = () => {
  return <Grid >
    <Header />
    <ParentComponent />
  </Grid>;
};

export default App;
