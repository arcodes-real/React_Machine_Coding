// // // // // import React from "react";
// // // // // import { useEffect } from "react";
// // // // // import { useState } from "react";


// // // // // export default function App(){

// // // // //   const [planetData, setPlanetData] = useState([]);

// // // // //   useEffect(() =>{
// // // // //     fetch("https://swapi.dev/api/planets/?format=json")
// // // // //     .then((response) => response.json())
// // // // //     .then((data) => {
// // // // //       setPlanetData(data.results)
// // // // //     })
// // // // //     .catch((err) =>{
// // // // //       console.log("Error fetching data: ",err)
// // // // //     })
// // // // //   }, []);

// // // // //   return (
// // // // //     <>
// // // // //       <h1>Star Wars Planets</h1>
// // // // //       {
// // // // //         planetData.map((planet, index) => (
// // // // //           <div>
// // // // //           <h2>Planet name: {planet.name}</h2>
// // // // //           <p>Planet Climate: {planet.climate}</p>
// // // // //           <p>Planet Population : {planet.population}</p>
// // // // //           <p>Planet Terrain: {planet.terrain}</p>
// // // // //           </div>
  
// // // // //         ))
// // // // //       }
// // // // //     </>
// // // // //   )
// // // // // }















// // // // import React from "react";
// // // // import { useState } from "react";


// // // // export default function App(){

// // // //   const [name, setName] = useState("")
// // // //   const [headingText, setHeadingText] = useState("");

// // // //   const handleName = (event) =>{
// // // //     console.log(event.target.value)
// // // //     setName(event.target.value)
    
// // // //   }
// // // //   const handleClick = (event) =>{
// // // //     setHeadingText(name)
// // // //     event.preventDefault();
// // // //     setName("")
// // // //   }
// // // //   return(
// // // //     <div>

// // // //       <h1>Hello {headingText}</h1>
// // // //       <form onSubmit={handleClick}>
// // // //       <input 
// // // //       onChange={handleName}
// // // //       value={name}
// // // //       type="text"
// // // //       placeholder="What's your name" />
// // // //       <button type="submit">Submit</button>
// // // //       </form>
      
// // // //     </div>
// // // //   )
// // // // }



// // import React, { useEffect, useState } from "react";

// // export default function App(){
// //    const [name, setName] = useState("")
// //    const [branch, setBranch] = useState("")
// //    const [gender, setGender] = useState("")
// //    const [stuInfo, setStuInfo] = useState({
// //     name: "",
// //     branch: "",
// //     gender: ""
// //    })
// //   const handleForm = (event) =>{
// //     // const form = event.target;
// //     // const formData = new FormData(form);
// //     // const formObj = Object.fromEntries(formData.entries())
// //     // console.log(formObj)
// //     setStuInfo({
// //       name: name,
// //       branch: branch,
// //       gender: gender
// //     })
// //     event.preventDefault();
// //     setName("")
// //     setBranch("")
// //     setGender("")

// //     const radios = document.querySelectorAll('input[type="radio"]')
// //     radios.forEach((radio) =>{
// //       radio.checked = false
// //     })
// //   }
// //   const handleNameInput = (e) =>{
// //     setName(e.target.value)
// //   }
// //   const handleBranchInput = (e) =>{
// //     setBranch(e.target.value)
// //   }`
// //   const handleGender = (e) =>{
// //     setGender(e.target.value)
// //   }
// //   return(
// //     <div>
// //       <h1>Add Student Info</h1>
// //       <form onSubmit={handleForm}>
// //         <div>
// //           <input type="text" placeholder="Add name..." name="name" value={name} onChange={handleNameInput}/>
// //         </div>  
// //         <div>
// //         <input type="text" placeholder="Add branch..." name="branch" value={branch} onChange={handleBranchInput}/>
// //         </div>
        
// //         <div>
// //             <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={handleGender}/>Male
// //             <input  type="radio" name="gender" value="female" checked={gender === "female"} onChange={handleGender}/>Female
// //           </div>
// //           <button type="submit">Save</button>
// //           <div>
// //           <h2>Name: {stuInfo.name}</h2>
// //           <h2>Branch: {stuInfo.branch}</h2>
// //           <h2>Gender: {stuInfo.gender}</h2>
// //           </div>
          
// //       </form>
      
// //     </div>
// //   )
// // }
// // import React, { useState } from "react";
// // import InputArea from "./components/inputArea";
// // import Todolist from "./components/todolist";

// // export default function App(){
// //     const [items, setItems] = useState([])

// //     const addItem = (inputText) =>{
// //       setItems((prevItems) =>{
// //         return [...prevItems, inputText]
// //       })
// //     }
// //   return(
// //     <div>
// //       <h1>To-Do List</h1>
// //       <InputArea onAdd={addItem} />
// //       <ul>
// //         {
// //           items.map((item, index) => (
// //             <Todolist 
// //               key={index}
// //               id={index}
// //               text={item}
// //             />
// //           ))
// //         }
// //       </ul>
// //     </div>
// //   )
// // }

// import React, { useEffect, useState } from "react";

// export default function App(){
    
//     const [getMin, setMin] = useState(0)
//     const [getSec, setSec] = useState(0)
//     const [timerHandler, setTimerHandler] = useState(false)

//     useEffect(()=>{
//         let interval;
//         if(timerHandler){
//             interval = setInterval(()=>{
//                 if(getSec < 59){
//                     setSec((prevSec) => prevSec+1)
//                 }else{
//                     setMin((prevMin) => prevMin+1)
//                     setSec(0)
//                 }
//             },1000)
//         }
//         else{
//             clearInterval(interval)
//         }
//         console.log(interval)
//         return () => clearInterval(interval)
//     },[timerHandler, getMin, getSec])

//     const startHandler = () =>{
//         setTimerHandler(true)
//     }

//     const stopHandler = () =>{
//         setTimerHandler(false)
//     }

//     const resetHandler = () =>{
//         setTimerHandler(false)
//         setMin(0)
//         setSec(0)
//     }

//     return (
//         <div>
//            <h1>{getMin} Min {getSec} Sec</h1>
//            <button onClick={startHandler}>Start</button>
//            <button onClick={stopHandler}>Stop</button>
//            <button onClick={resetHandler}>Reset</button>
//         </div>
//     )
// }

import React, { useState } from "react";
import InputArea from "./components/inputArea";
import Todolist from "./components/todolist";

export default function App(){

    const [items, setItems] = useState([])
    const addItem = (inputText)=>{
        setItems((prevItems) => {
            return [...prevItems, inputText]
        })
    }
    return(
        <div>
            <h1>TodoList</h1>
            <InputArea onAdd={addItem} />
            <ul>
                {
                    items.map((item, index)=>(
                        <Todolist
                         key={index}
                         id={index}
                         text={item} />
                    ))
                }
            </ul>
        </div>
    )
}