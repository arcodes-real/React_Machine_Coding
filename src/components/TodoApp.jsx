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