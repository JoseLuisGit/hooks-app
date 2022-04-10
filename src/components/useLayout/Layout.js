import React, { useRef, useLayoutEffect, useState } from "react";
import { useCounterHooks } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import './layout.css';

export const Layout = () => {
  const { state, increment } = useCounterHooks(1);

  const {  data } = useFetch(
    `https://breakingbadapi.com/api/quotes/${state}`
  );


  const [ boxSize, setBoxSize] = useState({});

  const { quote } = !!data && data[0];

  const pRef = useRef();

  useLayoutEffect(()=>{
      setBoxSize(pRef.current.getBoundingClientRect())
  }, [quote]);

  return (
    <>
      <h3>BreakingBad Notes</h3>

      <blockquote className="blockquote text-end">
        <p ref={ pRef }>{quote}</p>
      </blockquote>

      <pre>
          { JSON.stringify(boxSize, null, 3) }
      </pre>

      <button className="btn btn-success" onClick={increment}>
        Next
      </button>
    </>
  );
};
