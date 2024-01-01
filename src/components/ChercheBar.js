import React, { useState } from 'react'

function ChercheBar(props) {
  const [type, setType] = useState("")
  const rechercheHandler = () => {
    props.funcChercheBar(type)
  }
  return (
    <div style={{'border' : '2px dotted black', 'padding' : '20px', 'margin' : '20px'}}>
      <h1>cherchebar component</h1>
      <label>Entrer le mot clé de recherche :</label>
      <br/>
      <input type='text' value={type} placeholder='write here ...' onChange={(event)=>setType(event.target.value)}/>
      <br/>
      <input type='submit' value={"Rechercher"} onClick={rechercheHandler}/>
    </div>
  )
}

export default ChercheBar
