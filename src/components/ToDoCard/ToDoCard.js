/* eslint-disable react-hooks/rules-of-hooks */
import { Card, IconButton, makeStyles } from '@material-ui/core';
import { Check, Delete, Replay } from '@material-ui/icons';
import React, { useState } from 'react';

const toDoCardStyle = makeStyles((theme) => ({
  card: {
    position: 'relative',
    backgroundColor: (props) => (!props.isFinished ? '#274e6c' : '#79a9ce'),
    color: '#eeecdf',
    height: 'min-content',
    padding: '10px',
    marginBottom: theme.spacing(2),
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    '& h3': {
      alignSelf: 'center',
      width: '100%',
      margin: '0 0 10px 0',
      textDecoration: (props) => props.isFinished && ' line-through 2px #274e6c',
    },
    [theme.breakpoints.down('sm')]: {
      '& h3': {
        fontSize: '16px',
      },
    },
    [theme.breakpoints.up('sm')]: {
      width: '80% ',
      '& h3': {
        fontSize: '18px',
      },
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
  mainSection: {
    display: 'flex',
    flexFlow: 'column',
    maxWidth: '75%',
    '& h4': {
      margin: 0,
      fontSize: 14,
    },
  },
}));

const toDoCard = (props) => {
  const [isFinished, setIsFinished] = useState(props.isFinished);
  let date = new Date(props.date);
  date = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
  const classes = toDoCardStyle({ isFinished });
  return (
    <Card classes={{ root: classes.card }}>
      <div className={classes.mainSection}>
        <h3>{props.text}</h3>
        <h4>Due date: {date}</h4>
      </div>

      <div className={classes.buttonsHolder}>
        <IconButton
          onClick={() => {
            props.handleFinishToDo();
            setIsFinished(!isFinished);
          }}
        >
          {isFinished ? <Replay color="secondary" /> : <Check color="secondary" />}
        </IconButton>
        <IconButton onClick={props.handleDeleteToDo}>
          <Delete color="secondary" />
        </IconButton>
      </div>
    </Card>
  );
};

export default toDoCard;
