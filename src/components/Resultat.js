import React from 'react'

function Resultat(props) {
  return (
    <div style={{'border' : '2px dotted black', 'padding' : '20px', 'margin' : '20px'}}>
      <h1>Resultat component</h1>
      <div style={{"border" : "2px solid green", "width" : "400px", "height" : "300px", "padding" : "20px", "margin" : "auto"}}>
        <ul>
          {props.ttt.map((e, index)=> (
            <li key={index}>{e.nom}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Resultat