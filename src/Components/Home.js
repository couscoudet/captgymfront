import React from 'react'
import Header from './Header'

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <h2>{process.env.REACT_APP_API_URL}</h2>
    </div>
  )
}
