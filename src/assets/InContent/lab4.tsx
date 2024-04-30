//import { useState } from 'react'
import store from '../redux/store'
import { Provider } from 'react-redux'
import Counter from '../redux/counter'

function Lab2() {
  return (
    <>
      <h1>Redux счетчик</h1>
      <Provider store={store}>
        <Counter/>
      </Provider>
    </>

  );
}

export default Lab2
