import React, { useState } from 'react';
import TodoTable from'./TodoTable';

function TodoList() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    setTodos((todos) => todos.filter((todo, i) => i !== index)); 
  };

  return (
    <div>
      <p>Add todo:</p>
      <form onSubmit={addTodo}>
        Description: <input type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
        Date:<input type="date" name="date" onChange={inputChanged} value={todo.date}/>
        <input type="submit" value="Add" onClick={addTodo} />
      </form>
      <TodoTable todos={todos} deleteFunction={deleteTodo} />
    </div>
  );
};

export default TodoList;