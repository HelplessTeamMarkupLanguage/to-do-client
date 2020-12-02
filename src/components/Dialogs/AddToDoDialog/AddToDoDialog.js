import { Button, Dialog, DialogTitle, IconButton, TextField } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
import './AddToDoDialog.scss';

const addToDoDialog = (props) => (
  <Dialog open={props.open} onClose={props.handleCloseDialog} classes={{ paper: 'add-to-do-dialog' }}>
    <div className="add-to-do-dialog-header">
      <DialogTitle className="add-to-do-dialog-main-color">Add New To Do</DialogTitle>
      <IconButton onClick={props.handleCloseDialog}>
        <Close classes={{ root: 'add-to-do-dialog-main-color' }} />
      </IconButton>
    </div>
    <div className="add-to-do-dialog-inputs">
      <TextField
        id="standard-basic"
        label="ToDo "
        multiline
        value={props.toDoMessage}
        onChange={props.handleToDoMessageChange}
        rowsMax={2}
        classes={{ root: 'add-to-do-message-input' }}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          className="add-to-dot-date-picker"
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          value={props.selectedDate}
          onChange={props.handleDateChange}
          format="MM/dd/yyyy"
        />
      </MuiPickersUtilsProvider>
    </div>
    <Button classes={{ root: 'add-to-do-button' }} onClick={props.handleAddToDo}>
      Add
    </Button>
  </Dialog>
);

export default addToDoDialog;
