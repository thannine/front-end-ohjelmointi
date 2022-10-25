import React  from 'react';

function TodoTable(props) {

    return (
          <table>
            <thead><tr><th>Description</th><th>Date</th><th>Priority</th></tr></thead>
            <tbody>
              {
                props.todos.map((todo, index) => <tr key={index}>
                    <td>{todo.description}</td>
                    <td>{todo.date}</td>
                    <td>{todo.priority}</td>
                    <td><button onClick={() => props.deleteFunction(index)}>Delete</button></td></tr>)
              }
            </tbody>
          </table> 
      );    
};

export default TodoTable;