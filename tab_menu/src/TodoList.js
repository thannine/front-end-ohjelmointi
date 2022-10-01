import React, { useState, useRef }  from 'react';
import { AgGridReact } from 'ag-grid-react';
import Button from'@mui/material/Button';
import TextField from'@mui/material/TextField';
import Stack from'@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


function TodoList() {
    const [todo, setTodo] = useState({desc: '', date: new Date(), priority: ''});
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();
  
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

    const deleteTodo = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
          setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex));
        } else {
          alert('Select row first');
        }
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
            <Button variant="contained" onClick={deleteTodo} classes="textWarning" color="error">Delete</Button>
          </Stack>
          </MuiPickersUtilsProvider>
        <div className="ag-theme-material" style={{height: 400, width: 600, margin: 'auto'}}>
          <AgGridReact
            rowData={todos}
            columnDefs={columns}
            rowSelection="single" 
            ref={gridRef} 
            onGridReady={ params => gridRef.current = params.api }>
          </AgGridReact>
        </div>
      </div>
    );
};

export default TodoList;