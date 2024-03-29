import React, { useState } from 'react'

export default function InputArea(props) {
    const [inputText, setInputText] = useState("")

    const handleChange = (event) =>{
        const newValue = event.target.value;
        setInputText(newValue)
    }
  return (
    <div>
      <input 
        type="text"
        value={inputText}
        onChange={handleChange}
      />
      <button 
        onClick={() => {
            props.onAdd(inputText)
            setInputText("")
        }}>
        Add
      </button>
    </div>
  )
}


// import React, { useState } from "react";

// export default function App(){

//     const[selectedCountry, setSelectedCountry] = useState("")
//     const[selectedLanguage, setSelectedLanguage] = useState("")

//     const handleCountryChange = (event)=>{
//         setSelectedCountry(event.target.value)
//     }

//     const handleLanguageChange = (event) =>{
//         setSelectedLanguage(event.target.value)
//     }
//   const countries = ["India", "USA", "France", "Spain", "Poland", "Japan"];
//   const languages = ["English", "French", "Latino", "Japanaese", "Polish"];

//     return(
//         <div>
//             <h1>Select Country:</h1>
//             <select value={selectedCountry} onChange={handleCountryChange}>
//                 <option value="">Select a country</option>
//                 {
//                     countries.map((country,index) =>{
//                         return <option value={country} key={index}>{country}</option>
//                     })
//                 }
//             </select>
//             <h1>Select Language:</h1>
//             <select value={selectedLanguage} onChange={handleLanguageChange}>
//                 <option value="">Select a language</option>
//                 {
//                     languages.map((language, index) =>{
//                         return <option value={language} key={index} >{language}</option>
//                     })
//                 }
//             </select>
//             <span><h3>Selected Country : </h3>{selectedCountry}</span>
//             <span><h3>Selected Language : </h3>{selectedLanguage}</span>
//         </div>
//     )
// }