import { useState } from "react";

export const useCounterHooks = ( initialState = 100 ) => {
    
    const [state, setState] = useState( initialState );

    const increment = ()=>{
        setState( state + 1);
    }

    const decrement = ()=>{
        setState( state - 1 );
    }

    const reset = ()=>{
        setState( initialState );
    }

    return {state, increment, decrement, reset};
}