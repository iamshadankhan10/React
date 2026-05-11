import React,{useState} from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [allUsers, setAllUsers] = useState([])

  const submitHandler =(e) =>{
    e.preventDefault()

    const oldUsers = [...allUsers]
    oldUsers.push(title)
    console.log(oldUsers);

    setAllUsers(oldUsers)
    

    const newAllUsers = [...allUsers]
    newAllUsers.push(title)
    console.log(newAllUsers);
    

    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
        type="text"
        placeholder='Enter the name'
        value={title}
        required
        onChange={(e)=>{

          setTitle(e.target.value);

        }}/>
        <button type="submit">Submit</button>
      </form>

    {allUsers.map((elem,idx)=>{
      return <h1 key={idx}>{elem}</h1>
    })}

    </div>
  )
}

export default App