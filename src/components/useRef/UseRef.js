import React, {useRef} from 'react'

export const UseRef = () => {

  const inputRef = useRef();


  const handleSelect = ()=>{

    //document.querySelector('input').select();

    inputRef.current.select();
  };

  return (
    <>
      <h1>useRef</h1>
      <hr />

      <input 
        ref={ inputRef }
        name='name'
        placeholder='name'
        autoComplete='false'
      />

      <button onClick={ handleSelect }>
        Select
      </button>
    
    </>
  )
}
