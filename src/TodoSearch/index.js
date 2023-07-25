import React from 'react';
import './TodoSearch.css';
import {TodoContext} from '../TodoContext'

function TodoSearch() {
  const { 
    searchvalue,
    setsearchvalue,
  } =
    React.useContext(TodoContext);

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchvalue}
      onChange={(event) => {
        setsearchvalue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };