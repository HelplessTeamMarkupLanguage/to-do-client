import React, { useEffect, useState } from 'react';
import ToDoCard from '../../components/ToDoCard/ToDoCard';
import './ToDoList.scss';
import axios from '../../axios';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import AddToDoDialog from '../../components/Dialogs/AddToDoDialog/AddToDoDialog';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import NoDataFound from '../../components/NoDataFound/NoDataFound';

const ToDoList = (props) => {
  const [toDoList, setTodoList] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [toDoMessage, setToDoMessage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let toDos;

  //ez hack majd kitalálok valamit ne így keljen mert undorító megoldás, lehet valami rxjs megoldás lesz belőle
  const [isChanged, setIsChanged] = useState(false);

  const fetchToDoList = async () => {
    await axios
      .get('/todo')
      .then((res) => {
        setTodoList(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchToDoList();
  }, [isChanged]);

  const handleDeleteToDo = (id) => {
    setIsLoading(true);
    axios
      .delete('/todo/' + id)
      .then(() => {
        setIsChanged(!isChanged);
      })
      .catch((error) => console.log('valamiba', error));
  };

  const handleFinishToDo = (id) => {
    console.log(toDoList);
    const toDo = {
      isFinished: true,
    };
    axios
      .put('/todo/' + id, toDo)
      .then()
      .catch((error) => console.log('valam iba', error));
  };

  const handleAddToDo = () => {
    const toDo = {
      isFinished: false,
      text: toDoMessage,
    };
    axios
      .post('/todo', toDo)
      .then(() => {
        handleCloseDialog();
        setIsChanged(!isChanged);
        setIsLoading(true);
        cleanDialog();
      })
      .catch((error) => console.log('valam iba', error));
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

  const cleanDialog = () => {
    setToDoMessage();
    setSelectedDate();
  };

  if (isLoading === true) {
    toDos = <LoadingSpinner />;
  } else if (isLoading === false && toDoList.length === 0) {
    toDos = <NoDataFound />;
  } else {
    toDos = toDoList.map((todo) => (
      <ToDoCard
        text={todo.text}
        handleDeleteToDo={() => handleDeleteToDo(todo._id)}
        handleFinishToDo={() => handleFinishToDo(todo._id)}
      />
    ));
  }

  return (
    <div className="todo-list-page">
      <h1 className="todo-list-header"> All Tasks</h1>
      <div className="todo-list">{toDos}</div>
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
