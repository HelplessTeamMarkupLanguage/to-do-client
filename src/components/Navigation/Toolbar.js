import { Icon, makeStyles } from '@material-ui/core';
import React from 'react';
import NavigationItem from './NavigationItem';

const toolbarStyle = makeStyles((theme) => ({
  toolbar: {
    position: 'fixed',
    top: 0,
    background: '#274e6c',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    height: 50,
    width: '100%',
    zIndex: 999,
    '& h2': {
      margin: 0,
      color: '#eeecdf',
      alignSelf: 'center',
    },
  },
  nav: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  icon: {
    color: '#eeecdf',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const toolbar = (props) => {
  const classes = toolbarStyle();

  return (
    <header className={classes.toolbar}>
      <Icon className={classes.icon} onClick={props.drawerToggleClicked}>
        menu
      </Icon>
      <h2>HelplessToDo</h2>
      <nav className={classes.nav}>
        <NavigationItem onClick={props.onLogout} icon="exit_to_app">
          Logout
        </NavigationItem>
      </nav>
    </header>
  );
};

export default toolbar;
