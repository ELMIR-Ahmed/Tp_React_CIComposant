import React, { useState } from 'react'
import ChercheBar from './ChercheBar'
import Resultat from './Resultat'

const list=[
  {nom:"banane",type:"fruit"},
  {nom:"orange",type:"fruit"},
  {nom:"pomme",type:"fruit"},
  {nom:"raisins",type:"fruit"},
  {nom:"kiwi",type:"fruit"},
  {nom:"tomate",type:"legume"},
  {nom:"carotte",type:"legume"},
  {nom:"pomme de terre",type:"legume"},
  {nom:"navet",type:"legume"},
  {nom:"poivron",type:"legume"}
  ]
function App() {
  const [type, setType] = useState("")
  const [resultats, setResultats] = useState([])
  const chercheBar = (type) => {
    setType(type)
    setResultats(list.filter((e) => e.type.toUpperCase() === type.toUpperCase()))
  }
  return (
    <div className='App' style={{'border' : '2px solid black', 'padding' : '20px', 'margin' : '20px'}}>
      <h1>App component</h1>
      <ChercheBar funcChercheBar = {chercheBar}/>
      <h3>Type : {type}</h3>
      <Resultat ttt = {resultats}/>
    </div>
  )
}

export default App
