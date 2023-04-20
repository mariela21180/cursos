import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppNavigator from './components/AppNavigator'
import Pokedex from './containers/Pokedex'
import PokemonDetails from './containers/PokemonDetails'

export default function App() {
  return (
    <Router>
      <AppNavigator/>
      <Routes>
        <Route path="/" element={<Pokedex/>} />
        <Route path="/pokemon/:id" element={<PokemonDetails/>} />
      </Routes>
    </Router>
  )
}
