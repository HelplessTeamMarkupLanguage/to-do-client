import { Card, IconButton, makeStyles } from '@material-ui/core';
import { Check, Delete } from '@material-ui/icons';
import React from 'react';

const toDoCardStyle = makeStyles((theme) => ({
  card: {
    backgroundColor: '#274e6c',
    color: '#eeecdf',
    height: 'min-content',
    padding: '10px',
    marginBottom: theme.spacing(2),
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    '& h3': {
      alignSelf: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      '& h3': {
        margin: '10px 0',
      },
    },
    [theme.breakpoints.up('sm')]: {
      width: '80% ',
    },
    [theme.breakpoints.up('lg')]: {
      width: '45% ',
    },
  },
  buttonsHolder: {
    width: 'max-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const toDoCard = (props) => {
  const classes = toDoCardStyle();
  return (
    <Card classes={{ root: classes.card }}>
      <h3>{props.text} </h3>
      <div className={classes.buttonsHolder}>
        <IconButton onClick={props.handleFinishToDo}>
          <Check color="secondary" />
        </IconButton>
        <IconButton onClick={props.handleDeleteToDo}>
          <Delete color="secondary" />
        </IconButton>
      </div>
    </Card>
  );
};

export default toDoCard;
