import React, { useState } from "react";

import { MutiCustomHooks } from "../examples/MutiCustomHooks";

export const RealRef = () => {


    const [ show, setShow ]= useState(true);

  return (
    <>
      <h3>RealRef</h3>
      {show && <MutiCustomHooks /> }

      <button className="btn btn-primary" onClick={ ()=>{
          setShow( !show );
      }}>
        Show/Hide
      </button>
    </>
  );
};
