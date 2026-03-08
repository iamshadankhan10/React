import React from 'react'
import Card from './components/Card'
import Button from './components/Button'

export const App = () => {

  const user = ["Dhoni", "Virat", "Rohit", "Samson", "Dube"]
  const age = [45, 40, 42, 30, 35]

  return (
    <div className='p-3 h-screen bg-white'>
      {user.map(function(elem){
        return <h1>{elem}</h1>
      })}
    </div>
  )
}

export default App