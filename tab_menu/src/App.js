import React, { useState }  from 'react'
import Tabs from'@mui/material/Tabs';
import Tab from'@mui/material/Tab';
import Home from './Home';
import TodoList from './TodoList';

import './App.css';

function App() {

  const [tabValue, setTabValue] = useState('home');

  const tabChanged = (event, value) => {
    setTabValue(value);
  };

  return (
    <div className="App">
      <Tabs value={tabValue} onChange={tabChanged}>
        <Tab value="home" label="home" />
        <Tab value="todo" label="todos" />
      </Tabs>
      {tabValue === 'home' && <div><Home /></div>}
      {tabValue === 'todo' && <div><TodoList /></div>}
    </div>
  );
}

export default App;
