import { makeStyles, Menu } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router-dom';
import NavigationItem from './NavigationItem';

const menuStyle = makeStyles((theme) => ({
  menu: {
    '& :nth-child(n+0)': {
      marginTop: 10,
      marginBottom: 10,
    },
  },
}));

const DropDownMenu = (props) => {
  const classes = menuStyle();

  return (
    <Menu
      className={classes.menu}
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      anchorEl={props.anchorEl}
      keepMounted
      open={Boolean(props.anchorEl)}
      onClose={props.handleDropdownMenuClose}
    >
      <NavigationItem
        icon="settings"
        onClick={() => {
          props.handleNavigation('/settings');
          props.handleDropdownMenuClose();
        }}
      >
        Settings
      </NavigationItem>
      <NavigationItem icon="exit_to_app" onClick={props.onLogout}>
        Logout
      </NavigationItem>
    </Menu>
  );
};

export default withRouter(DropDownMenu);
