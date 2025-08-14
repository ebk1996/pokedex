import React from 'react'
import Pokecard from './Pokecard.jsx'
import { POKEMON } from '../data/pokemon.js'

export default function Pokedex({ pokemon = POKEMON, totalExp, isWinner, title = 'Pokedex' }) {
  return (
    <section className="panel">
      <div className="pokedex-header">
        <h2 style={{margin:0}}>{title}</h2>
        {typeof totalExp === 'number' && (
          <span className="pill">Total EXP: {totalExp}</span>
        )}
      </div>
      <div className="grid">
        {pokemon.map(p => <Pokecard key={p.id} {...p} />)}
      </div>
      {typeof isWinner === 'boolean' && (
        <div className={isWinner ? 'win' : 'lose'}>
          {isWinner ? 'THIS HAND WINS!' : 'Try again for a win ✨'}
        </div>
      )}
    </section>
  )
}
