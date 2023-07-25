import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError} from '../TodoError';
import { EmptyTodos } from '../EmptyTodos';
import React from ' react';

function AppUI ({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchvalue,
    setsearchvalue,
    searchedtodos,
    completeTodo,
    DeleteTodo,
}){

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
        {loading && 
        <React.Fragment>
          
        <TodosLoading/>
        <TodosLoading/>
        <TodosLoading/>
        <React.Fragment/>
        }
        {error && <TodosError />}
        {!loading && searchedtodos.lenght === 0 && <EmptyTodos />}
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

export { AppUI };