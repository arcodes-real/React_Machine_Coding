import React from 'react'

export default function Todolist(props) {
  return (
    <div
    onClick={() =>{
      props.onDelete(props.id)
    }}>
      
      <li>{props.text}</li>
    </div>
  )
}
