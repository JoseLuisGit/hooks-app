import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: 1,
    todo: "Recolectar Informacion",
    done: false,
  },
  {
    id: 2,
    todo: "Enviar Informacion",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1>
        Todos: 20 <small>pendientes: 15</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <ul className="list-group">
            {
            todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between"
              >
                <span className="align-self-center">{todo.todo}</span>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))
            }
          </ul>
        </div>
        <div className="col-7">
          <h4>Agregar TODO</h4>
          <hr />

          <form>
            <input
              type="text"
              placeholder="¿Que vamos a hacer?"
              className="form-control"
            />

            <button className="btn btn-success mt-2" type="submit">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
