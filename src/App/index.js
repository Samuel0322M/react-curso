import React from 'react';
import { AppUI } from './AppUI';
import {useLocalStorage} from './useLocalStorage';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false},
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify (defaultTodos));


function App() {
  {/* se asigna a la varia todos y setTodos una funcion de react estado la cual toma de defaulttodos la informacion
*/}

  const {
    item: todos,  
    saveItem: saveTodos,
    error,
    loading,
    } = useLocalStorage("TODOS_V1", []);
  const [searchvalue, setsearchvalue] =React.useState('');
  
  {/*
  se asigna a la varia completedtodos la funcion de filter con la cual se le asigna otro nombre a la variable todo para 
indicar en donde realize el filtro y valide cuales son las verdades o falsas de ese filtro se usa !! para ayudar al sistema que es un 
dato boleano y .lenght para que cuenta cuantos  valores filtrados hay
*/}
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length; 



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
      (todo) => todo.text === text
    )
    newTodos[todoindex].completed = true;
    saveTodos(newTodos);
  }

  const DeleteTodo = (text) => {
    const newTodos = [...todos];
    const todoindex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoindex, 1);
    saveTodos(newTodos);
  }

return (
<AppUI
 loading={loading}
 error={error}
 completedTodos={completedTodos}
 totalTodos={totalTodos}
 searchvalue={searchvalue}
 setsearchvalue={setsearchvalue}
 searchedtodos={searchedtodos}
 completeTodo={completeTodo}
 DeleteTodo={DeleteTodo}
 />
);
}
export default App;

