import React, { useEffect, useState } from 'react';
import ToDoCard from '../../components/ToDoCard/ToDoCard';
import './ToDoList.scss';
import axios from 'axios';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import AddToDoDialog from '../../components/Dialogs/AddToDoDialog/AddToDoDialog';

const ToDoList = (props) => {
  const [toDoList, setTodoList] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [toDoMessage, setToDoMessage] = useState();

  /* const fetchToDoList = () => {
    axios
      .get('http://localhost:8080/todo')
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchToDoList();
  }, [fetchToDoList, toDoList]); */

  const handleDeleteToDo = () => {
    console.log('delete');
  };

  const handleFinishToDo = () => {
    console.log('finish');
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleToDoMessageChange = (event) => {
    setToDoMessage(event.target.value);
  };

  const handleAddToDo = () => {
    console.log(toDoMessage, selectedDate);
  };

  return (
    <div className="todo-list-page">
      <h1 className="todo-list-header"> All Tasks</h1>
      <div className="todo-list">
        <ToDoCard handleDeleteToDo={handleDeleteToDo} handleFinishToDo={handleFinishToDo} />
      </div>
      <Fab classes={{ root: 'todo-fab' }} onClick={handleOpenDialog}>
        <Add />
      </Fab>
      <AddToDoDialog
        handleCloseDialog={handleCloseDialog}
        handleDateChange={handleDateChange}
        handleToDoMessageChange={(event) => handleToDoMessageChange(event)}
        handleAddToDo={handleAddToDo}
        open={open}
        toDoMessage={toDoMessage}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default ToDoList;
