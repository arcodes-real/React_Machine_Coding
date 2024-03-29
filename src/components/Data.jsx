
import React from "react";

export default function Data(props){
    return(
        <div>

            <h1>adc</h1>
            <p>jnc</p>
            <h1>{props.title}</h1>
            </div>
    )
}

Data.defaultProps={
    title : "I am title"
}