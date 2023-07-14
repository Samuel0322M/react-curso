import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false},
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
// ];


// localStorage.setItem('TODOS_V1', defaultTodos);
// localStorage.removeItem('TODOS_V1');

function App() {
  {/* se asigna a la varia todos y setTodos una funcion de react estado la cual toma de defaulttodos la informacion
*/}
const localStorageTodos = localStorage.getItem('TODOS_V1');

if (!localStorageTodos) {
  localStorage.setItem('TODOS_V1', JSON.stringify([]));
  parsedTodos = [];
}else {
  parsed
}



let parsedTodos = JSON.parse (localStorageTodos);
  const [todos, setTodos] = React.useState(parsedTodos);
  
  {/*
  se asigna a la varia completedtodos la funcion de filter con la cual se le asigna otro nombre a la variable todo para 
indicar en donde realize el filtro y valide cuales son las verdades o falsas de ese filtro se usa !! para ayudar al sistema que es un 
dato boleano y .lenght para que cuenta cuantos  valores filtrados hay
*/}
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length; 

  const [searchvalue, setsearchvalue] = React.useState('');

  console.log(searchvalue);
{/*  se asigna la variable searchedtodos la funcion filtro se crea una nueva variable todo para que manipule informacion
con la funcion includes me busque que texto tienen esa informacion*/}
  const searchedtodos = todos.filter(
(todo) => {
    return todo.text.toLowerCase().includes
    (searchvalue.toLowerCase());
  }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoindex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos[todoindex].completed = true;
    setTodos(newTodos);
  }

  const DeleteTodo = (text) => {
    const newTodos = [...todos];
    const todoindex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos.splice(todoindex, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoCounter 
      completed={completedTodos}  
       total={totalTodos} 
       />
      <TodoSearch 
      
        valorbusqueda={searchvalue}
        setvalorbusqueda={setsearchvalue}
      
      />
       
      <TodoList>
        {searchedtodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.
              text)}
              onDelete={() => DeleteTodo(todo.completed.
                text)}

          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;