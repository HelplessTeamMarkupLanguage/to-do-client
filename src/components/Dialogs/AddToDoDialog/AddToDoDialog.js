import { Button, Dialog, DialogTitle, IconButton, makeStyles, TextField } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';

const dialogStyle = makeStyles((theme) => ({
  dialog: {
    textAlign: 'center',
    padding: 18,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'colum',
    [theme.breakpoints.down('xs')]: {
      height: 'max-content !important',
      minWidth: '90%',
    },
    [theme.breakpoints.up('xs')]: {
      minWidth: '25%',
      height: 'max-content !important',
    },
  },
  dialogHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonRoot: {
    color: 'white',
    width: '70%',
    margin: 'auto',
    marginTop: '50px !important',

    [theme.breakpoints.down('xs')]: {
      minWidth: '90%',
    },
  },
  message: {
    width: '90%',
    marginBottom: 20,
  },
  datePicker: {
    width: '90%',
  },
  primaryColor: {
    color: '#274e6c',
  },
  underline: {
    '&:before': {
      borderBottomColor: '#274e6c',
    },
    '&:after': {
      borderBottomColor: '#274e6c',
    },
    '&:hover:not($disabled):not($focused):not($error):before': {
      borderBottomColor: '#274e6c !important',
    },
  },
  datePickerIcon: {
    '& .MuiButtonBase-root': {
      color: '#274e6c',
    },
  },
}));

const addToDoDialog = (props) => {
  const classes = dialogStyle();

  return (
    <Dialog open={props.open} onClose={props.handleCloseDialog} classes={{ paper: classes.dialog }}>
      <div className={classes.dialogHeader}>
        <DialogTitle classes={{ root: classes.primaryColor }}>Add New To Do</DialogTitle>
        <IconButton onClick={props.handleCloseDialog}>
          <Close color="primary" />
        </IconButton>
      </div>
      <div>
        <TextField
          onInvalid={false}
          className={classes.message}
          id="standard-basic"
          label="ToDo"
          multiline
          value={props.toDoMessage}
          onChange={props.handleToDoMessageChange}
          rowsMax={2}
          InputProps={{ classes: { underline: classes.underline, input: classes.primaryColor } }}
          InputLabelProps={{ classes: { root: classes.primaryColor } }}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className={classes.datePicker}
            margin="normal"
            id="date-picker-dialog"
            label="Date"
            value={props.selectedDate}
            onChange={props.handleDateChange}
            format="MM/dd/yyyy"
            InputAdornmentProps={{ classes: { root: classes.datePickerIcon } }}
            InputProps={{
              classes: { underline: classes.underline, root: classes.primaryColor },
            }}
            InputLabelProps={{ classes: { root: classes.primaryColor } }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <Button
        variant="contained"
        color="primary"
        classes={{ root: classes.buttonRoot }}
        onClick={props.handleAddToDo}
        disabled={!props.toDoMessage}
      >
        Add
      </Button>
    </Dialog>
  );
};

export default addToDoDialog;
