import React from 'react'
import Pokedex from './components/Pokedex.jsx'
import Pokegame from './components/Pokegame.jsx'

export default function App() {
  return (
    <main>
      <div className="container">
        <header className="app-header">
          <h1>Pokédex</h1>
          <button className="btn" onClick={() => window.location.reload()}>New Game</button>
        </header>
        {/* Base requirement: a single Pokedex (uses default props) */}
        <Pokedex />
        {/* Further study: game mode */}
        <Pokegame />
      </div>
    </main>
  )
}
