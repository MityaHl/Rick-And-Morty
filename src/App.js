import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/blocks/Header'
import Lists from './components/blocks/Lists'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Lists />
    </BrowserRouter>
  )
}

export default App;
