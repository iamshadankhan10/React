import React from 'react'

const Card = () => {
  return (
    <div className='w-[23vw] md:w-[30vw] sm:w-[45vw] rounded-xl py-8 px-8 flex items-center flex-col text-center bg-white text-black'>
      <img className='w-24 h-24 rounded-full' src="https://images.unsplash.com/photo-1773332598501-f8612761781a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
        <h1 className='text-2xl mt-2 font-bold'>Shadan Raza</h1>
        <h5 className=' text-blue-500 text-lg font-semibold my-2'>Web Developer</h5>
        <p className='text-sm font-medium leading-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <button className='px-4 py-2 rounded text-xs cursor-pointer active:scale-95 bg-red-500 text-white font-semibold mt-3'>Delete</button>
    </div>
  )
}

export default Card