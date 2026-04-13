import { useState, useEffect } from 'react'
import {displayGuilda} from './components/displayGuilda'

function App() {
  
const [guilda, Setguilda] = useState([{id: 1, nome: 'Joao', poder: 50}])

const [nome, setNome] = useState()
const [poder, setPoder] = useState()

function handleSubmit(e) {
  e.preventDefault();
  if(nome.Length < 3){
    console.log('nome muito pequeno')
    return
  }
  if(poder < 1 || poder > 100) {
    console.log("poder invalido")
    return
  }
}

  return (
    <>
     <ul>
      {guilda.map((membro) =>
        <li key={membro.id}>
          {displayGuilda(membro)}
        </li>
     )}
     </ul>

     <div>
     <h1>novo membro</h1>
     <form onSubmit={handleSubmit}>
    <label>nome:</label>
     <input value={nome} type="text" onChange={(e) => setNome(e.target.value)} />
     <label> poder:</label>
     <input value={poder} type="number" onChange={(e) => setPoder(e.target.value)} />
     <button type="submit">Cadastrar</button>
     </form>
     
     </div>
     
    </>
  )
}

export default App
