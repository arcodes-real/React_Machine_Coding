import React, { useState } from "react";
import InputArea from "./inputArea";
import Todolist from "./todolist";

export default function TodoApp(){
    const [items, setItems] = useState([]);

    const addItem = (inputText)=>{
        setItems((prevItems) => {
            return [...prevItems, inputText]
        })
    }
    const handleDelete = (id) =>{
        setItems((prevItems) =>{
            return prevItems.filter((item, index) => {return index !== id})
        })
    }
    return(
        <div>
            <h1>Machine Coding 1</h1>
            <h1>TodoList</h1>
            <InputArea onAdd={addItem} />
            <ul>
                {
                    items.map((item, index)=>(
                        <Todolist
                         key={index}
                         id={index}
                         text={item}
                         onDelete={handleDelete} />
                    ))
                }
            </ul>
        </div>
    )
}