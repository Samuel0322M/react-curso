import React from 'react';
import { AppUI } from './AppUI';
import {useLocalStorage} from './uselocalstorage';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false},
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify (defaultTodos));


function App() {
 
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

