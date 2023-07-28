import React from 'react';
import { TodoContext } from '../TodoContext';
import './todocounter.css';
export { TodoCounter };

function TodoCounter() {
   const { 
    completedTodos,
    totalTodos,
  } =
    React.useContext(TodoContext);

  if (totalTodos === 0) {
    return (
  <h1 style={{
    textAlign: 'center',
    fontsize: '90 px', 
  }}>Crea tu primer TO DO</h1>
    );
} else if (completedTodos === 0 && totalTodos !==0){
  return (
  <h1 style={{
    textAlign: 'center',
    fontsize: '90 px',  
  }}>Completa tu primer TO DO'S</h1>
);
}else if (completedTodos === totalTodos ){
  return (
  <h1 style={{
    textAlign: 'center',
    fontsize: '90 px',  
  }}>¡Felicidades has completado todos tus TO DO'S!</h1>
); 
} else {
  return (
    <h1 style={{
      textAlign: 'center',
      fontsize: '90 px', 
    }}>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TO DO'S</h1> 
  );
}
}
























