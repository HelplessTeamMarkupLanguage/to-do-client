/* eslint-disable react-hooks/rules-of-hooks */
import axios from '../../axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Card, makeStyles, Snackbar, TextField } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const registrationStyle = makeStyles((theme) => ({
  header: {
    top: '2%',
    marginBottom: '1em',
    color: '#274e6c',
    textAlign: 'center',
  },
  card: {
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      minWidth: '90%',
    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: '50%',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '25%',
    },
    padding: theme.spacing(2),
    boxSizing: 'border-box',
  },
  textField: {
    width: '90%',
    margin: theme.spacing(2),
    marginBottom: 0,
  },
  buttonHolder: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .MuiButtonBase-root': {
      width: '25%',
      minWidth: 80,
      [theme.breakpoints.down('xs')]: {
        width: '30%',
      },
    },
  },
  resetButton: {
    marginRight: theme.spacing(2),
  },
  submitButton: {
    color: 'white',
  },
  loginLink: {
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

const registrationPage = (props) => {
  const { register, handleSubmit, errors, formState, clearErrors, reset } = useForm({
    mode: 'onChange',
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const classes = registrationStyle();
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMessage, setSneckBarMessage] = useState('');

  const handleResetAllInputFields = () => {
    setUsername('');
    setPassword('');
    setPasswordRepeat('');
    clearErrors();
    reset();
  };

  const onSubmit = async (data) => {
    const username = data.username;
    const password = data.password;
    await axios
      .post('/user/signin', { username, password })
      .then((res) => {
        console.log(res);
        setSneckBarMessage('Successful Registration');
        setSnackBarOpen(true);
        setTimeout(() => {
          props.history.push('/login');
        }, 1500);
      })
      .catch((err) => {
        setSneckBarMessage('Registration Failed');
        setSnackBarOpen(true);
        console.error(err);
      });
  };

  return (
    <>
      <Card className={classes.card}>
        <h1 className={classes.header}>Registration</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <TextField
            className={classes.textField}
            name="username"
            label="Username *"
            defaultValue={username}
            onChange={(event) => setUsername(event.target.value)}
            inputRef={register({
              required: 'Username required',
              minLength: { value: 5, message: 'At least 5 character' },
              validate: true,
            })}
            error={!!errors.username}
            helperText={errors.username && errors.username.message}
          />
          <TextField
            className={classes.textField}
            name="password"
            label="Password *"
            type="password"
            defaultValue={password}
            onChange={(event) => setPassword(event.target.value)}
            inputRef={register({
              required: 'Password required',
              minLength: { value: 8, message: 'At least 8 character' },
              validate: true,
            })}
            error={!!errors.password}
            helperText={errors.password && errors.password.message}
          />
          <TextField
            className={classes.textField}
            name="password_repeat"
            label="Repeat Password *"
            type="password"
            defaultValue={passwordRepeat}
            onChange={(event) => setPasswordRepeat(event.target.value)}
            inputRef={register({
              required: 'Password required',
              validate: (value) => value === password || 'The passwords do not match',
            })}
            error={!!errors.password_repeat}
            helperText={errors.password_repeat && errors.password_repeat.message}
          />
          <div className={classes.buttonHolder}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.resetButton}
              onClick={handleResetAllInputFields}
            >
              Reset
            </Button>
            <Button
              classes={{ root: classes.submitButton }}
              disabled={!formState.isValid}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
        <h4 className={classes.loginLink}>
          Changed your mind? <NavLink to="/login">Back to Login</NavLink>
        </h4>
      </Card>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snackBarOpen}
        autoHideDuration={1500}
        onClose={() => {
          setSnackBarOpen(false);
        }}
        message={snackBarMessage}
      />
    </>
  );
};

export default registrationPage;
