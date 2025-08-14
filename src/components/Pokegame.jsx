import React, { useMemo } from 'react'
import Pokedex from './Pokedex.jsx'
import { POKEMON } from '../data/pokemon.js'

function shuffle(arr) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export default function Pokegame({ roster = POKEMON }) {
  const { hand1, hand2, total1, total2 } = useMemo(() => {
    const s = shuffle(roster)
    const h1 = s.slice(0, 4)
    const h2 = s.slice(4, 8)
    const t1 = h1.reduce((a, p) => a + p.base_experience, 0)
    const t2 = h2.reduce((a, p) => a + p.base_experience, 0)
    return { hand1: h1, hand2: h2, total1: t1, total2: t2 }
  }, [roster])

  return (
    <div>
      <Pokedex pokemon={hand1} totalExp={total1} isWinner={total1 > total2} title="Hand One" />
      <Pokedex pokemon={hand2} totalExp={total2} isWinner={total2 > total1} title="Hand Two" />
      <p className="footer-note">Refresh to deal again 🔁</p>
    </div>
  )
}
