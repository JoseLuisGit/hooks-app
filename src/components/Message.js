import React, { useEffect, useState } from 'react';

export const Message = () => {

  
    const [ coord , setCoord ] = useState({x: 0, y:0})

    const { x, y } = coord;

    const mouseMove = (e)=>{

        console.log( e.x, e.y);
        setCoord({
            x: e.x,
            y: e.y
        })
    }

    useEffect(()=>{
        window.addEventListener('mousemove', mouseMove)

        return ()=>{
            window.removeEventListener('mousemove', mouseMove)
        }
    })

  return <div>It's a message: x: { x } y: { y }</div>;
};
