import React, { useState } from 'react';
import './index.css';
//conponents
import TodoForm from "./form";
import Todo from "./todo";

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn react ',
      isCompleted: false,
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'Go to store',
      isCompleted: false,
    },
    {
      text: 'Build to-do-list app',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        <header>
          <h1>My Tasks 🎯</h1>
        </header>
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
