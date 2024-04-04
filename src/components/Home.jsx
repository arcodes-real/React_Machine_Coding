import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
   const navigate = useNavigate();

   const handleBtn1Click = () =>{
    navigate("/todolist")
   }

   const handleBtn2Click = () =>{
    navigate("/timer")
   }

   const handleBtn3Click = () =>{
    navigate("/population")
   }
  return (
    <div>
      <h2>Welcome to React Machine Coding Questions</h2>
      <button onClick={handleBtn1Click}>Machine Coding 1</button>
      <button onClick={handleBtn2Click}>Machine Coding 2</button>
      <button onClick={handleBtn3Click}>Machine Coding 3</button>
    </div>
  )
}
