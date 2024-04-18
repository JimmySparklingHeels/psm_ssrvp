import { useState } from 'react'
import MyButton from './assets/button'
import Container from './assets/container'
import Navigation from './assets/navigation'

function Helloworld() {
  const [count, setCount] = useState(0);
  
  function ButtonClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Hello world</h1>
      <Container>
        <MyButton ButtonClick={ButtonClick} count={count} />
        <Navigation/>
      </Container>
    </>

  );
}

export default Helloworld
