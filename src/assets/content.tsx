//import { useState } from 'react'
import * as React from 'react'
import {Routes, Route} from 'react-router-dom'
import {ThemeContext} from './theme'
import Homepage from './InContent/homepage'
import About from './InContent/about'
import Lab1 from './InContent/lab1'
import Lab2 from './InContent/lab2'
import Lab4 from './InContent/lab4'
import Lab5 from './InContent/lab5'
import Lab6 from "./InContent/lab6";

function Content() {
  const {isDark} = React.useContext(ThemeContext);
  return (
    <div className={isDark ? 'themedark' : 'themelight'}>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Lab1" element={<Lab1/>}/>
        <Route path="/Lab2" element={<Lab2/>}/>
        <Route path="/Lab4" element={<Lab4/>}/>
        <Route path="/Lab5" element={<Lab5/>}/>
        <Route path="/Lab6" element={<Lab6/>}/>
      </Routes>
    </div>
    );
}

export default Content
