import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [];

const init = () =>{
  return JSON.parse(localStorage.getItem('todos')) || initialState;
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);


  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos])


  const handleAdd = (todo) =>{
      const action = {
        type: '[TODO] add todo',
        payload: todo
      }

      dispatch( action );
  } 

  const handleDelete = (todo) => {
    const action = {
      type: '[TODO] delete todo',
      payload: todo
    }
    dispatch( action );
  }

  const handleToggle = (todo) => { 
    const action = {
      type: '[TODO] toggle todo',
      payload: todo
    }
    dispatch( action );
  }

  return (
    <>
      <h1>
        Todos: {todos.length} <small>pendientes: 15</small>
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
