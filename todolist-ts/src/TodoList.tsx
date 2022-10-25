import React, { useState } from 'react';
import { Todo } from './Todo';
import TodoTable from './TodoTable';



function TodoList() {
    const [todo, setTodo] = useState<Todo>({description: '', date: '', priority: ''} as Todo);
    const [todos, setTodos] = useState<Array<Todo>>([]);
  
    const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTodo({...todo, [event.target.name]: event.target.value});
    };
  
    const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setTodos([...todos, todo]);
    };
  
    const deleteTodo = (index: number) => {
      setTodos((todos) => todos.filter((todo, i) => i !== index)); 
    };
  
    return (
      <div>
        <p>Add todo:</p>
        <form onSubmit={addTodo}>
          Description: <input type="text" name="description" onChange={inputChanged} value={todo.description}/>
          Date:<input type="date" name="date" onChange={inputChanged} value={todo.date}/>
          Priority: <input type="text" name="priority" onChange={inputChanged} value={todo.priority}/>
          <input type="submit" value="Add" />
        </form>
       <TodoTable todos={todos} deleteFunction={deleteTodo} />
      </div>
    );
  };
  
  export default TodoList;