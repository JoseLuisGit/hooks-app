import React, { useState } from "react";
import { useCounterHooks } from "../../hooks/useCounter";
import { HeaderCounter } from "./HeaderCounter";

export const CounterMemo = () => {
  const {state, increment} = useCounterHooks(1)

  const [show, setShow] = useState(true);

  return (
    <>
      <HeaderCounter counter={state}/>

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
