import { Icon, makeStyles } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router-dom';
import AvatarDropdown from './AvatarDropdown';
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
      cursor: 'pointer',
    },
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
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
      <h2 onClick={() => props.handleNavigation('/todos')}>HelplessToDo</h2>
      <Icon className={classes.icon} onClick={props.drawerToggleClicked}>
        menu
      </Icon>
      <nav className={classes.nav}>
        <NavigationItem onClick={() => props.handleNavigation('/todos')}>ToDos</NavigationItem>
        <AvatarDropdown
          handleNavigation={props.handleNavigation}
          anchorEl={props.anchorEl}
          handleDropdownMenuClose={props.handleDropdownMenuClose}
          handleDropdownMenuOpen={props.handleDropdownMenuOpen}
          onLogout={props.onLogout}
        />
      </nav>
    </header>
  );
};

export default withRouter(toolbar);
