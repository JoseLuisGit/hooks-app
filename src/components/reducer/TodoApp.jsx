import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    todo: "Recolectar Informacion",
    done: false,
  },
  {
    id: new Date().getTime() * 2,
    todo: "Enviar Informacion",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);


  const handleAdd = (todo) =>{
      console.log(todo);
  } 

  return (
    <>
      <h1>
        Todos: 20 <small>pendientes: 15</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <ul className="list-group">
            <TodoList todos={todos}/>
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
