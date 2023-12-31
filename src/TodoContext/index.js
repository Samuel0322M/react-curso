import React from 'react';
import {useLocalStorage} from "./useLocalStorage"

const TodoContext = React.createContext();

function TodoProvider( {children}) {
  const {
    item: todos,  
    saveItem: saveTodos,
    error,
    loading,
    } = useLocalStorage("TODOS_V1", []);
  const [searchvalue, setsearchvalue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  
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

  const addTodo = (text) =>{
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed:false,
    });
    saveTodos(newTodos);
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoindex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    if (newTodos[todoindex].completed){
      newTodos[todoindex].completed = false;
    } else { 
      newTodos[todoindex].completed = true;
    }
    
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
  <TodoContext.Provider value={{
    loading,
    error,
    completedTodos,
    totalTodos,
    searchvalue,
    setsearchvalue,
    searchedtodos,
    completeTodo,
    DeleteTodo,
    openModal,
    setOpenModal,
    addTodo,
  }}>
    {children}
  </TodoContext.Provider>


  )
}

export {TodoContext, TodoProvider};