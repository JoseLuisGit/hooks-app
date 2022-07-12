

const initialState = [
    {
        id: 1,
        todo: 'Recolectar',
        done: false
    }
]

const newTodo = 
    {
        id: 2,
        todo: 'Mejorar',
        done: false
    }

const addTodoAction = {
    type: '[TODO] add action',
    payload: newTodo
}

const todoReducer = (state = initialState, action = {})=>{

    if(action.type === '[TODO] add action'){
        return [ ...state, action.payload ];
    }

    return state
}


let todos = todoReducer(initialState, addTodoAction);


console.log(todos);