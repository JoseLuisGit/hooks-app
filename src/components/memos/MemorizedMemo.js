import React, { useMemo, useState } from "react";
import { useCounterHooks } from "../../hooks/useCounter";


const heavyStuff = (iterations = 1000)=>{
  
    for(let i = 1; i <= iterations; i++){
        console.log('iterations');
    }

    return (
        <h2>
            Cantidad de iteraciones { iterations}
        </h2>
    )

}

export const MemorizedMemo = () => {
  const {state, increment} = useCounterHooks(4000)

  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(state), [state]);

  return (
    <>
    <div>
       { memorizedValue}
    </div>
      <button
        className="btn btn-primary"
        onClick={ increment }
      >
        +1
      </button>

      <button
        className="btn btn-success"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide { JSON.stringify(show)}
      </button>
    </>
  );
};
