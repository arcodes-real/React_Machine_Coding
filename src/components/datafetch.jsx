import React, { useEffect, useState } from 'react'

export default function Datafetch() {

    const [data, setData] = useState([])

    // https://jsonplaceholder.typicode.com/users

    useEffect(() =>{
        const fetchData = async ()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const jsonData = await response.json()
            setData(jsonData.map((item) => item.email))
        }
        fetchData()
    },[])

  return (
    <div>
      <h1>Email ids:</h1>
      <ul>
        {
            data.map((email) =>{
                return <li>{email}</li>
            })
        }
      </ul>
    </div>
  )
}
