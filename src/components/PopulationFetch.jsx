import React, { useEffect, useState } from 'react'

export default function PopulationFetch() {
    const [data, setData] = useState([])
    useEffect(() =>{
        const fetchData = async()=>{
            const response = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
            const jsonData = await response.json()
            setData(jsonData.data)
            
        }
        fetchData();
    })
  return (
    <div>
       <table>
        <thead>
            <tr>
                <td>Year</td>
                <td>Population</td>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item, index) =>(
                    <tr key={index}>
                        <td>{item.Year}</td>
                        <td>{item.Population}</td>
                    </tr>
                ))
            }
        </tbody>
       </table>
    </div>
  )
}
