//import { useState } from 'react'
import * as React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './InContent/homepage'
import Lab1 from './InContent/lab1'
import Lab2 from './InContent/lab2'
import Lab4 from './InContent/lab4'
import {ThemeContext} from './theme'

function Content() {
  const {isDark} = React.useContext(ThemeContext);
  return (
    <div className={isDark ? 'themedark' : 'themelight'}>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Lab1" element={<Lab1/>}/>
        <Route path="/Lab2" element={<Lab2/>}/>
        <Route path="/Lab4" element={<Lab4/>}/>
      </Routes>
    </div>
    );
}

export default Content
