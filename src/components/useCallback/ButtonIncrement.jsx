import React from "react";

export const ButtonIncrement = React.memo(({increment}) => {

    console.log('Click');
    return (
        <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
    )
})