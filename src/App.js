import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/blocks/Header'
import Lists from './components/blocks/Lists'
import OneCharacter from './components/blocks/OneCharacter'

function App({ character }) {
  return (
    <BrowserRouter>
      <Header />
      <Lists />
      {character.location && <OneCharacter />}
    </BrowserRouter>
  )
}

export default App
