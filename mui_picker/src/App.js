import React, { useState }  from 'react'
import { AgGridReact } from 'ag-grid-react';
import Button from'@mui/material/Button';
import TextField from'@mui/material/TextField';
import Stack from'@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function App() {
  const [todo, setTodo] = useState({desc: '', date: new Date(), priority: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    setTodos([...todos, todo]);
    setTodo({desc: '', date: new Date(), priority: ''});
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  const dateChanged = (date) => {
    setTodo({...todo, 'date': date});  
  }

  const columns = [
    { field: 'desc', sortable: true, filter: true },
    { field: 'date', sortable: true, filter: true },
    { field: 'priority', sortable: true, filter: true },
  ]

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todos</Typography>
        </Toolbar>
      </AppBar>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
          <TextField 
            label="Description"
            name="desc" 
            value={todo.desc}
            variant="standard"
            onChange={inputChanged}/>
          <DatePicker value={todo.date} onChange={dateChanged} label="Date" />  
          <TextField 
            label="Priority"
            name="priority" 
            value={todo.priority}
            variant="standard" 
            onChange={inputChanged}/>
          <Button variant="contained" onClick={addTodo}>Add</Button>
        </Stack>
        </MuiPickersUtilsProvider>
      <div className="ag-theme-material" style={{height: 400, width: 600, margin: 'auto'}}>
        <AgGridReact
          rowData={todos}
          columnDefs={columns}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
