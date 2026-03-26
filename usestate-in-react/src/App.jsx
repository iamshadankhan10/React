import React from 'react'
import Navbar from './components/Navbar'
import Men from './components/Men'
import Women from './components/Women'

const App = () => {

  const user1 ={
    name: 'Shadan',
    age:8,
    Gender:'Male',
  }
  const user2 = {
    name: 'Dhoni',
    age:45,
    Gender:"Male",
  }

  const user3 = {
    name: 'Sakshi',
    age:20,
    Gender:"Female",
  }


  return (
    <div>
      {user1.Gender=='Male' ? (user1.age>10 ? <Men/> : <Women/>) : <Women/>}
      {user2.Gender=='Male' ? (user2.age>10 ? <Men/> : <Women/>) : <Women/>}
      {user3.Gender=='Male' ? (user3.age>10 ? <Men/> : <Women/>) : <Women/>}


      
    </div>
  )
}

export default App

