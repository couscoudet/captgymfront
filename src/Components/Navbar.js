import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <Link to='/partners'>Partenaires</Link>
        <Link to='/sport-rooms'>Salles</Link>
        <Link to='/contacts'>Contacts</Link>
    </nav>
  )
}
