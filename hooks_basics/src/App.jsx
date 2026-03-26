// import React, {useState} from 'react'

// const App = () => {

//   const [captain, setCaptain] = useState('Dhoni')
//   const [queen, setQueen] = useState(0)

//   // const btnClicked = () =>{
//   //   console.log("button Clicked");
//   //   setCaptain('Rohit Sharma')
//   // }

//   // const changeQueen = () =>{
//   //   console.log("Changed queen");
//   //   setQueen(queen+10)
//   // }


//   return (
//     <div>
//       {/* <h1>{captain}</h1>
//       <button onClick={btnClicked}>Change</button> */}
//       <h1>{queen}</h1>
//       <button onClick={()=>{
//         setQueen(queen+1)
//       }}>Increase</button>

//       <button onClick={()=>{
//         setQueen(queen-1)
//       }}>Decrease</button>
      
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {

  const marks = [80, 86, 90, 78, 88 ]

  return (
    <div>
      {marks.map(function(elem, idx){
        return <h1>Marks of student {idx + 1} is {elem}</h1>
      })}

      <button>Give them praise</button>
    </div>
  )
}

export default App