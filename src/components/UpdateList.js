import { Button, Grid, Hidden, TextField } from '@mui/material';
import React from 'react';
import useStyles from './Themes';

const UpdateList = ({ handleUpdate, inputText, getText, focusInput }) => {

  const styles = useStyles();

  return <form onSubmit={handleUpdate}>
    <Grid container spacing={5}>

      <Grid xs={9} item>
        <Hidden only={["xs", "sm"]}>
          <TextField
            fullWidth
            label="Updated Todo List"
            type="text"
            value={inputText}
            onChange={getText}
            ref={focusInput}
          />
        </Hidden>

        <Hidden only={["md", "lg", "xl"]}>
          <TextField
            fullWidth
            size='small'
            label="Updated Todo List"
            type="text"
            value={inputText}
            onChange={getText}
            ref={focusInput}
          />
        </Hidden>
      </Grid>

      <Grid xs={3} item>

        <Hidden only={["sm", "xs"]}>
          <Button
            className={styles.btnLg}
            fullWidth
            variant="contained"
            type="button"
            onClick={handleUpdate}>Update
          </Button>
        </Hidden>

        <Hidden only={["md", "lg", "xl"]}>
          <Button
            fullWidth
            className={styles.btnSm}
            variant="contained"
            type="button"
            onClick={handleUpdate}>Update
          </Button>
        </Hidden>
      </Grid>
    </Grid>
  </form>;
};

export default UpdateList;
