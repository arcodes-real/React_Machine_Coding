import React from 'react'
import E from './E'

export default function C() {
  return (
    <div>
      <E />
    </div>
  )
}


// import React, { useEffect, useReducer, useState } from "react";


// export default function App(){
 
//   const reducer = (state, action) =>{
//     let newState
//     switch (action.type) {
//       case 'increment':
//         newState = state+1
//         break;
//       case 'double':
//         newState = state * 2
//         break;
//       default:
//         newState = state
//         break;
//     }
//     return newState
//   }

//   const [counter, dispatch] = useReducer(reducer,0)
//   const fire = ()=>{
//     ['increment', 'double' , 'reset', 'increment'].forEach((type) => dispatch({type}))
//   }
//   return(
//     <div>
//      <button onClick={fire}>{counter}</button>
//     </div>

//   );
// }