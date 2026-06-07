import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');

  useEffect(() => {
    console.log('useEffect called');
  }, [title]);


  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Name' />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App