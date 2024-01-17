import { useState } from "react"

import Perfil from "./components/Perfil"
import RepoList from "./components/RepoList"

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')
  return (
  <>
  <div className="app-container">
    <input className="insertName" type="text" placeholder="Digite o nome do usuário" onBlur={(e) => setNomeUsuario(e.target.value)}/>
  </div>
    
    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario} />
        <RepoList nomeUsuario={nomeUsuario} />
      </>
    )}
  </>
)

}

export default App
