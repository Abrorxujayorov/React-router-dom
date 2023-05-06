import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
export default function Nav() {
  const [bgColor ,setBgColor] = useState('')
  const [buttons, setButtons] = useState([
    {name: 'Home', peth: '', id: 1},
    {name: 'HEADPHONES', peth: 'headphones', id: 2},
    {name: 'SPEAKERS', peth: 'speakers', id: 3},
    {name: 'EARPHONES', peth: 'earphones', id: 4},
])
  return (
    <nav className='navbar'>
      <h3>Logo</h3>
      <span className='nav-list'>{buttons.map(item => <p key={item.id}><Link className={`nav-link ${bgColor === item.name ? 'active' : ''}`} to={item.peth} onClick={() => setBgColor(item.name)}>{item.name}</Link></p>)} </span>
      <h3><i class="fa-solid fa-cart-shopping"></i></h3>
    </nav>
  )
}
