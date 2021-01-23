import { Avatar, makeStyles } from '@material-ui/core';
import React from 'react';
import DropDownMenu from './DropDownMenu';

const avatarStyle = makeStyles((theme) => ({
  avatar: {
    height: 35,
    width: 35,
    marginLeft: 16,
    cursor: 'pointer',
    color: '#274e6c',
    backgroundColor: '#eeecdf',
    '&:hover': {
      backgroundColor: '#79a9ce',
      color: '#eeecdf',
    },
  },
}));

const AvatarDropdown = (props) => {
  const classes = avatarStyle();

  return (
    <>
      <Avatar className={classes.avatar} onClick={props.handleDropdownMenuOpen} />
      <DropDownMenu
        handleNavigation={props.handleNavigation}
        anchorEl={props.anchorEl}
        onLogout={props.onLogout}
        handleDropdownMenuClose={props.handleDropdownMenuClose}
      />
    </>
  );
};

export default AvatarDropdown;
