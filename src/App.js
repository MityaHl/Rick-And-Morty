import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/blocks/Header'
import CharactersPage from './components/pages/CharactersPage'
import EpisodesPage from './components/pages/EpisodesPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/characters" exact component={CharactersPage} />
        <Route path="/episodes" exact component={EpisodesPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
