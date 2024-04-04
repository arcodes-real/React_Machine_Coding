import React, { useEffect, useState } from 'react'


export default function PopulationFetch() {
    const [data, setData] = useState([])
    const [originalData, setOriginalData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    // fetch the data
    useEffect(() =>{
        const storedData = localStorage.getItem("populationData");
        if(storedData){
            setOriginalData(JSON.parse(storedData))
            setData(JSON.parse(storedData))
        }else{
        const fetchData = async()=>{
            const response = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
            const jsonData = await response.json()
            setData(jsonData.data)
            setOriginalData(jsonData.data)
        }
        fetchData();
    }
    },[])

    // debouncing effect
    useEffect(() =>{
        const timeoutId = setTimeout(() =>{
            const filteredData = originalData.filter(
                (item) =>
                    item.Year.toString().includes(searchTerm)||
                    item.Population.toString().includes(searchTerm)
                )
            setData(filteredData)
        },300);
        return () => clearTimeout(timeoutId)
    },[searchTerm, originalData])

    const handleReset = ()=>{
        setData(originalData)
        setSearchTerm("")
    }

    const handleDelete = (id) =>{
        setData((prevData) =>{
           const newData = prevData.filter((item, index) => index !== id)
           localStorage.setItem("populationData", JSON.stringify(newData))
           return newData
        })
    }
    
  return (
    <div>
         <h1>Machine Coding 3</h1>
        <input
         type="text"
         value={searchTerm}
         onChange={(event) =>{
            setSearchTerm(event.target.value)
            
         }} />
         <button onClick={handleReset}>Reset</button>
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
                        <td>
                            <button onClick={() => handleDelete(index)} >Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
       </table>
    </div>
  )
}
