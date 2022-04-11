import React from 'react'

export const HeaderCounter = React.memo(({ counter }) => {

  console.log('me dibuje :(')
  return (
    <h2>HeaderCounter { counter }</h2>
  )
});
