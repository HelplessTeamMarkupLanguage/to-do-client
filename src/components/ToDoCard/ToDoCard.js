import { Card, Icon, IconButton } from '@material-ui/core';
import { Check, Delete } from '@material-ui/icons';
import React from 'react';
import './ToDoCard.scss';

const toDoCard = (props) => (
  <Card classes={{ root: 'todo-card' }}>
    <h3>{props.text} </h3>
    <div className="todo-card-buttons">
      <IconButton onClick={props.handleFinishToDo}>
        <Check color="secondary" />
      </IconButton>
      <IconButton onClick={props.handleDeleteToDo}>
        <Delete color="secondary" />
      </IconButton>
    </div>
  </Card>
);

export default toDoCard;
