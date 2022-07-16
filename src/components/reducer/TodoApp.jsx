
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../../hooks/useTodo";


export const TodoApp = () => {
  const { todos, handleAdd, handleDelete, handleToggle } = useTodo();

  return (
    <>
      <h1>
        Todos: {todos.length} <small>pendientes: { todos.filter( todo => !todo.done ).length }</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <ul className="list-group">
            <TodoList todos={todos} onDeleteTodo={handleDelete} onToggleTodo={handleToggle}/>
          </ul>
        </div>
        <div className="col-7">
          <h4>Agregar TODO</h4>
          <hr />

            <TodoAdd handleAdd={handleAdd}/>

        </div>
      </div>
    </>
  );
};
