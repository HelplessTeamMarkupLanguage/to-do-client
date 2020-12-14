import { Card, makeStyles } from '@material-ui/core';
import React from 'react';

const noDataStyle = makeStyles((theme) => ({
  card: {
    backgroundColor: '#274e6c',
    color: '#eeecdf',
    margin: 'auto',
    fontSize: 20,
    '& h4': {
      textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30%',
    },
  },
}));

const noDataFound = (props) => {
  const classes = noDataStyle();

  return (
    <Card classes={{ root: classes.card }}>
      <h4>You have nothing todo</h4>
    </Card>
  );
};

export default noDataFound;
