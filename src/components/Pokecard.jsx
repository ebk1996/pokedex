import React from 'react'
import { motion } from 'framer-motion'
import { imgUrl } from '../data/pokemon.js'

export default function Pokecard({ id, name, type, base_experience }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="card-inner">
        <div className="thumb">
          <img src={imgUrl(id)} alt={name} />
        </div>
        <div>
          <h3 className="name">{name}</h3>
          <p className="meta">Type: {type}</p>
          <p className="meta">EXP: {base_experience}</p>
        </div>
      </div>
    </motion.div>
  )
}
