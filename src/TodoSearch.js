import React from 'react';
import './TodoSearch.css';

function TodoSearch({valorbusqueda, setvalorbusqueda}) {
 
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={valorbusqueda}
      onChange={(event) => {
        setvalorbusqueda(event.target.value);
      }}
    />
  );
}

export { TodoSearch };