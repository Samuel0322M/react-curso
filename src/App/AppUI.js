import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError/Index';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext} from '../TodoContext';

function AppUI (){
return (
    <>
      <TodoCounter  />
      <TodoSearch   />
       
       <TodoContext.Consumer>
      {({
        loading,
        error,
        searchedtodos,
        completeTodo,
        DeleteTodo,
      }) => (
      
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
      </TodoList>)}
      </TodoContext.Consumer>
      
      <CreateTodoButton />
    </>
  );
}

export { AppUI };