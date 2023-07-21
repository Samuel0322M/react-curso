import React from 'react';

function useLocalStorage(itemName, initialvalue ) {
  
    console.log(itemName);
    const localStorageItem = localStorage.getItem(itemName);
    console.log(localStorageItem);
  
  let parsedItem;
  
  
  if (!localStorageItem) {
    console.log('ingreso al si');
    localStorage.setItem(itemName, JSON.stringify(initialvalue));
    parsedItem = [];
  }else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState (parsedItem);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    
    setItem(newItem);
  };
  
  return [item, saveItem]; 
  }

  export {useLocalStorage}