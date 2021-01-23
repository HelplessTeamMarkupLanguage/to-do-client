import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#274e6c',
    },
    secondary: {
      main: '#eeecdf',
    },
  },
  overrides: {
    MuiInput: {
      root: {
        color: '#274e6c',
      },
      underline: {
        '&:before': {
          borderBottomColor: '#274e6c',
        },
        '&:after': {
          borderBottomColor: '#274e6c',
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottomColor: '#274e6c !important',
        },
      },
    },
    MuiInputLabel: {
      root: {
        color: '#274e6c',
      },
    },
    MuiInputAdornment: {
      root: {
        '& .MuiButtonBase-root': {
          color: '#274e6c',
        },
      },
    },
    MuiDialogTitle: {
      root: {
        color: '#274e6c',
      },
    },
    MuiCard: {
      root: {
        boxSizing: 'border-box',
      },
    },
    MuiDrawer: {
      paper: {
        background: '#274e6c',
        padding: 16,
        height: '100vh',
      },
    },
    MuiMenu: {
      paper: {
        marginTop: 10,
        backgroundColor: '#274e6c',
        width: 150,

        padding: 0,
        '& .MuiList-root': {
          padding: 0,
        },
      },
    },
  },
});

export default theme;
