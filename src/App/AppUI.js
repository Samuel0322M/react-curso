import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

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
        {loading && <p>Loading...</p>}
        {error && <p>there was a error</p>}
        {!loading && searchedtodos.lenght === 0 
        && <p>¡Create your first TODO!</p>}

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