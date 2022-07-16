
import { useEffect, useReducer } from "react";
import { todoReducer } from "../components/reducer/todoReducer";


const init = () =>{
  return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodo = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, [], init);


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

    return { todos, handleAdd, handleDelete, handleToggle };
  
    
}