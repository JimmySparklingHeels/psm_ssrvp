//import { useState } from 'react'
import * as React from 'react'
import MyButton from '../button'
import Container from '../container'

function Lab2() {
  const [count, setCount] = React.useState(0);
  
  function ButtonClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Hello world</h1>
      <Container>
        <MyButton ButtonClick={ButtonClick} count={count}/>
      </Container>
    </>

  );
}

export default Lab2
