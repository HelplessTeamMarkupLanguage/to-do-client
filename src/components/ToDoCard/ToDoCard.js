import { Card, Icon } from '@material-ui/core';
import React from 'react';
import IconButton from '../IconButton/IconButton';
import './ToDoCard.scss';

const toDoCard = (props) => (
  <Card classes={{ root: 'todo-card' }}>
    <h3>{props.text} </h3>
    <div className="todo-card-buttons">
      <IconButton iconName="check" onClick={props.handleFinishToDo} />
      <IconButton iconName="delete" onClick={props.handleDeleteToDo} />
    </div>
  </Card>
);

export default toDoCard;
