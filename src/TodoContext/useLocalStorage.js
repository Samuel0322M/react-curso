import React from 'react';

function useLocalStorage(itemName, initialvalue ) {
  const [item, setItem] = React.useState (initialvalue);

  const [loading, setloading] = React.useState (true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() =>  {
    setTimeout(() => {
      try{
      const localStorageItem = localStorage.getItem (itemName);
      let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialvalue));
    parsedItem = initialvalue;
  }else {
    parsedItem = JSON.parse(localStorageItem);
    setItem(parsedItem);
  }
  setloading(false)
 } catch(error) {
  setloading(false)
    setError(true);
  }
}, 2000);
}, []);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  
  return  {
  item,
  saveItem,
  error,
  loading,
  };   
};
  

  export {useLocalStorage}

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false},
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify (defaultTodos));
