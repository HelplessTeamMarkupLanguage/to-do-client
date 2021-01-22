import { Button, Card, makeStyles, Snackbar, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import axios from '../../axios';

const loginStyle = makeStyles((theme) => ({
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
    display: 'flex',
    flexDirection: 'column',
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
  buttonHolder: {
    marginTop: 20,
    width: '100%',
  },
  registration: {
    width: '100%',
    position: 'static',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
    color: '#274e6c',
    '& a': {
      color: '#de7a22',
      textDecoration: 'none',
    },
    '& a:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function LoginPage(props) {
  const { register, handleSubmit, errors, formState, clearErrors, reset } = useForm({
    mode: 'onChange',
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const classes = loginStyle();

  const handleClear = () => {
    setUsername('');
    setPassword('');
    clearErrors();
    reset();
  };

  const onSubmit = async () => {
    await axios
      .post('/user/login', { username, password })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/todos');
      })
      .catch((err) => {
        console.error(err);
        setSnackBarOpen(true);
      });
  };

  return (
    <>
      <Card className={classes.card}>
        <h1 className={classes.header}>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className={classes.textField}
            defaultValue={username}
            onChange={(event) => setUsername(event.target.value)}
            inputRef={register({
              required: 'Username required',
              minLength: { value: 5, message: 'At least 5 characters' },
              validate: true,
            })}
            error={!!errors.username}
            helperText={errors.username && errors.username.message}
            name="username"
            label="Username *"
          ></TextField>
          <TextField
            className={classes.textField}
            defaultValue={password}
            onChange={(event) => setPassword(event.target.value)}
            label="Password *"
            name="password"
            type="password"
            autoComplete="true"
            inputRef={register({
              required: 'Password required',
              minLength: { value: 8, message: 'At least 8 characters' },
              validate: true,
            })}
            error={!!errors.password}
            helperText={errors.password && errors.password.message}
          ></TextField>
          <div className={classes.buttonHolder}>
            <Button
              className={classes.submitButton}
              variant="contained"
              color="primary"
              type="submit"
              disabled={!formState.isValid}
            >
              Submit
            </Button>
            <Button className={classes.clearButton} variant="outlined" color="primary" onClick={() => handleClear()}>
              Clear
            </Button>
          </div>

          <h4 className={classes.registration}>
            New Member? <NavLink to="/registration">Register here</NavLink>
          </h4>
        </form>
      </Card>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snackBarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackBarOpen(false)}
        message="Incorrect username and password"
      />
    </>
  );
}
