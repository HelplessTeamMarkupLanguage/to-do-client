import { Icon, makeStyles } from '@material-ui/core';
import React from 'react';

const navigationItemStyle = makeStyles((theme) => ({
  navigationItem: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    cursor: 'pointer',
    maxHeight: 70,
    '&:hover': {
      backgroundColor: '#79a9ce',
    },
    '& h3': {
      margin: 0,
      color: '#eeecdf',
    },
    [theme.breakpoints.down('md')]: {
      margin: 0,
      fontSize: 22,
    },
  },
  icon: {
    marginRight: 10,
    color: '#eeecdf',
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontSize: 22,
    },
  },
}));

const NavigationItem = (props) => {
  const classes = navigationItemStyle();

  return (
    <div className={classes.navigationItem} onClick={props.onClick}>
      {props.icon && <Icon className={classes.icon}>{props.icon}</Icon>}
      <h3>{props.children}</h3>
    </div>
  );
};

export default NavigationItem;
