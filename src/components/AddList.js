import { Button, Grid, Hidden, TextField } from '@mui/material';
import React from 'react';
import useStyles from './Themes';

const AddList = ({ handleForm, getText, inputText, focusInput }) => {

  const styles = useStyles();


  return <form onSubmit={handleForm}>
    <Grid container spacing={5}>

      <Grid xs={9} item >
        <Hidden only={["xs", "sm"]}>
          <TextField
            fullWidth
            variant="outlined"
            label="Write Here..."
            type="text"
            onChange={getText}
            value={inputText}
            ref={focusInput}
          />
        </Hidden>

        <Hidden only={["md", "xl", "lg"]}>
          <TextField
            fullWidth
            size='small'
            variant="outlined"
            label="Write Here..."
            type="text"
            onChange={getText}
            value={inputText}
            ref={focusInput}
          />
        </Hidden>
      </Grid>

      <Grid xs={3} item>
        <Hidden only={["xs", "sm"]}>
          <Button
            className={styles.btnLg}
            fullWidth
            variant="contained"
            type='button'
            onClick={handleForm}> Add
          </Button>
        </Hidden>

        <Hidden only={["md", "lg", "xl"]}>
          <Button
            className={styles.btnSm}
            fullWidth
            size="small"
            variant="contained"
            type='button'
            onClick={handleForm}> Add
          </Button>
        </Hidden>

      </Grid>
    </Grid>
  </form>
};

export default AddList;
