import React, { useEffect, useState } from 'react'

export default function Practice() {

    const [data, setData] = useState([]);
    const [originalData, setOriginalData] = useState([])
    const [searchTerm,setSearchTerm] = useState("")

    useEffect(() =>{
        const storedData = localStorage.getItem("PopulationData")
        if(storedData){
            setOriginalData(JSON.parse(storedData))
            setData(JSON.parse(storedData))
        }
        else{
        const fetchData = async()=>{
            const response = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
            const jsonData = await response.json();
            setData(jsonData.data)
            setOriginalData(jsonData.data)
        }
        fetchData()
    }
    },[])

    // debouncing
    useEffect(() =>{
        const timeoutId = setTimeout(() =>{
            const filteredData = originalData.filter(
                (item) =>
                    item.Year.toString().includes(searchTerm)||
                    item.Population.toString().includes(searchTerm)
            )
            setData(filteredData)
        },3000)
        return () => clearTimeout(timeoutId)
    },[originalData,searchTerm])

    const handleDelete = (id)=>{
        setData((prevData) => {
            const newData = prevData.filter((item,index) => index!== id)
            localStorage.setItem("PopulationData", JSON.stringify(newData))
            return newData;
        })
    }

  return (
    <div>
      <input
      type="text"
      value={searchTerm}
      onChange={(e) =>
       setSearchTerm(e.target.value)} />
      <table>
        <thead>
            <tr>
                <td>Year</td>
                <td>Population</td>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item,index) =>(
                    <tr key={index}>
                        <td>{item.Year}</td>
                        <td>{item.Population}</td>
                        <td>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}
