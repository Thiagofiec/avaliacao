import { useState, useEffect } from 'react'
import {displayGuilda} from './components/displayGuilda'

function App() {
 const [guilda, setGuilda] = useState(() => {
    const data = localStorage.getItem('guilda')
    return data ? JSON.parse(data) : [
      { id: 1, nome: 'Joao', poder: 50, ativo: true }
    ]})

useEffect(() => {
  localStorage.setItem("guilda", JSON.stringify(guilda))
}, [guilda])

const [nome, setNome] = useState("")
const [poder, setPoder] = useState("")

function promover(id) {
    setGuilda(guilda.map((membro) =>
      membro.id === id && membro.poder < 100
        ? { ...membro, poder: membro.poder + 1 }
        : membro
    ))
  }

function deletar(id) {
    setGuilda(guilda.map((membro) =>
      membro.id === id
        ? { ...membro, ativo: false }
        : membro
    ))
  }

function handleSubmit(e) {
  e.preventDefault();
  if(nome.length < 3){
    console.log('nome muito pequeno')
    return
  }
  if(Number(poder) < 1 || Number(poder) > 100) {
    console.log("poder invalido")
    return
  }

  const id = guilda.length > 0 ? guilda[guilda.length - 1].id + 1 : 1
  
  setGuilda([...guilda, {
    id: id,
    nome: nome,
    poder: Number(poder),
    ativo: true
  }])

  setNome("")
  setPoder("")
}

const caixa = "border border-gray-300 shadow-md p-4 rounded-lg bg-white"

  return (
    <>
     <ul className={caixa}>
      
      {
        guilda.filter(membro => membro.ativo)
        .map((membro) =>
          <li key={membro.id}>
            {displayGuilda(membro)}
            {membro.poder < 100 ?
            <button onClick={() => promover(membro.id)}>promover</button> :
            <p>Poder absoluto adquirido</p>
          }
            
            <button onClick={() => deletar(membro.id)}>deletar</button>
          </li>
      )}
     </ul>

     <div className={caixa}>
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
