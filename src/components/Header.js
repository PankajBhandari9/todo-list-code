import React, { useState } from 'react';
import { Hidden, Paper, Typography } from '@mui/material';
import useStyles from './Themes';

const Header = () => {

  const styles=useStyles();
  return <Paper elevation={20}>
    <Hidden only={["xs", "sm"]}>
      <Typography variant={"h2"} align='center' className={styles.todoHeading}>
        Todo List
      </Typography>
    </Hidden>
    <Hidden only={["md", "lg", "xl"]}>
      <Typography variant={"h3"} align='center' className={styles.todoHeading}>
        Todo List
      </Typography>
    </Hidden>
  </Paper>;
};

export default Header;
