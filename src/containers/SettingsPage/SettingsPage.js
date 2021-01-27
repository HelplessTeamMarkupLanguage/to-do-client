import { Button, Card, makeStyles, Snackbar, TextField } from '@material-ui/core';
import { useState } from 'react';
import axios from '../../axios';

const registrationStyle = makeStyles((theme) => ({
  header: {
    top: '2%',
    marginBottom: '1em',
    color: '#274e6c',
    textAlign: 'center',
  },
  card: {
    maxWidth: 500,
    margin: theme.spacing(2),
    [theme.breakpoints.up(550)]: { margin: 'auto', marginTop: theme.spacing(2) },
    '& h3': {
      margin: '8px 16px 0px 16px',
      color: '#274e6c',
    },
  },
  textField: {
    width: '90%',
    margin: theme.spacing(2),
    marginBottom: 0,
  },
  submitButton: {
    float: 'right',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginRight: '8%',
  },
  clearButton: {
    float: 'right',
    margin: theme.spacing(1),
  },
}));

export default function SettingsPage(props) {
  const [password, setPassword] = useState('');
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const classes = registrationStyle();

  const submit = () => {
    axios
      .post('/user/delete', { password })
      .then(() => {
        localStorage.clear();
        props.history.push('/login');
      })
      .catch((e) => {
        setSnackBarOpen(true);
      });
  };

  return (
    <>
      <h1 className={classes.header}>Settings</h1>
      <Card className={classes.card}>
        <h3>Delete Account</h3>
        <TextField
          className={classes.textField}
          type="password"
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          onClick={() => submit()}
          disabled={password.length < 8}
        >
          Submit
        </Button>
        <Button
          className={classes.clearButton}
          variant="outlined"
          color="primary"
          onClick={() => {
            setPassword('');
          }}
        >
          Clear
        </Button>
      </Card>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snackBarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackBarOpen(false)}
        message="Password is incorrect"
      />
    </>
  );
}
