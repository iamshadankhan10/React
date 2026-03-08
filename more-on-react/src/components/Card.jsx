import React from 'react'

const Card = (props) => {
  console.log(props);
  
  
  
  return (
    <div className='bg-lime-100 
    border-2 m-2 rounded h-40 px-5 py-3 w-40 text-xl text-red-700'>
      <h1 className='text-2xl font-semibold'>
        {props.user},
        <br />  {props.age} 
      </h1>
    </div>
  )
}

export default Card