import React from 'react'
import ReactDOM from 'react-dom/client'
import Helloworld from './helloworld.tsx'
import { BrowserRouter } from "react-router-dom"
import Header from './assets/header'
import Footer from './assets/footer'
import Content from './assets/content'
import './assets/stuff.css'
import {ThemeProvider} from './assets/theme'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider>
      <Header/>
      <Content/>
      {/*<Helloworld />*/}
      <Footer>
        <hr></hr>
        <p>Письменский А. Р. &copy; <time>2024</time></p>
      </Footer>
    </ThemeProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
