import React from 'react'

function Resultat(props) {
  return (
    <div style={{'border' : '2px dotted black', 'padding' : '20px', 'margin' : '20px'}}>
      <h1>Resultat component</h1>
      <div style={{"border" : "2px solid green", "width" : "400px", "height" : "300px", "padding" : "20px", "margin" : "auto"}}>
        <table border={3}>
          <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>DESCRIPTION</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.ttt.id}</td>
              <td>{props.ttt.title}</td>
              <td>{props.ttt.price}</td>
              <td>{props.ttt.description}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Resultat