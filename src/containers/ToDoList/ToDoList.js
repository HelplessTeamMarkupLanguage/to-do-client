import React, { useEffect, useState } from 'react';
import ToDoCard from '../../components/ToDoCard/ToDoCard';
import axios from '../../axios';
import { Fab, makeStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import AddToDoDialog from '../../components/AddToDoDialog/AddToDoDialog';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import NoDataFound from '../../components/NoDataFound/NoDataFound';

const toDoListStyle = makeStyles((theme) => ({
  toDoList: {
    padding: theme.spacing(2),
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  header: {
    top: '2%',
    marginBottom: '3em',
    color: '#274e6c',
    textAlign: 'center',
  },
  fabButton: {
    position: 'fixed',
    bottom: '5%',
    right: theme.spacing(2),
    backgroundColor: '#de7a22',
    [theme.breakpoints.down('xs')]: {
      bottom: '15%',
    },
  },
}));

const ToDoList = (props) => {
  const classes = toDoListStyle();
  const [toDoList, setTodoList] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [toDoMessage, setToDoMessage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('token');
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
      .catch((error) => console.log('valami hiba', error));
  };

  const handleFinishToDo = (id, isFinished) => {
    const toDo = {
      isFinished: !isFinished,
    };
    axios
      .put('/todo/' + id, toDo)
      .then((toDoList.find((todo) => todo._id === id).isFinished = !isFinished))
      .catch((error) => console.log('valami hiba', error));
  };

  const handleAddToDo = () => {
    const toDo = {
      date: selectedDate ? selectedDate : new Date(),
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
      .catch((error) => console.log('valami hiba', error));
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
    toDos = <LoadingSpinner text="Your ToDos Are On The Way" />;
  } else if (isLoading === false && toDoList.length === 0) {
    toDos = <NoDataFound />;
  } else {
    toDos = toDoList.map((todo) => (
      <ToDoCard
        key={todo._id}
        text={todo.message}
        isFinished={todo.isFinished}
        date={todo.date}
        handleDeleteToDo={() => handleDeleteToDo(todo._id)}
        handleFinishToDo={() => handleFinishToDo(todo._id, todo.isFinished)}
      />
    ));
  }

  return (
    <div className={classes.toDoList}>
      <h1 className={classes.header}>All Tasks</h1>
      {toDos}
      <Fab color="primary" classes={{ root: classes.fabButton }} onClick={handleOpenDialog}>
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
