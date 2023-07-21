import React from 'react';

function useLocalStorage(itemName, initialvalue ) {
  const [item, setItem] = React.useState (initialvalue);

  const [Loading, setLoading] = React.useState (true);
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
  setLoading(false)
 } catch(error) {
  setLoading(false)
    setError(true);
  }
},1000);
}, []);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  
  return  {
  item,
  saveItem,
  error,
  Loading,
  };   
};
  

  export {useLocalStorage}