import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError/Index';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoContext} from '../TodoContext';
import {TodoForm} from '../TodoForm';



function AppUI (){
  const {
    loading,
    error,
    searchedtodos,
    completeTodo,
    DeleteTodo,
    openModal,     
    setOpenModal, 
  } = React.useContext(TodoContext);
return (
    <>
      <TodoCounter  />
      <TodoSearch   />
      
      <TodoList>
        { loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchedtodos.lenght === 0 )
        && <EmptyTodos />}

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
      <CreateTodoButton 
      setOpenModal={setOpenModal} 
      />

      {openModal && (      
      <Modal>
            <TodoForm />  
      </Modal>
      )}
    </>
  );
}

export { AppUI };