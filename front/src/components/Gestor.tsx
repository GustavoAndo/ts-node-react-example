import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

function Gestor() {
  const auth = useContext(AuthContext)

  return (
    <div className="container">
        <h1 className="text-center mt-5">Página Gestor</h1>
        <p>Bem-vindo, {auth.usuario?.nome}!, você é do perfil: {auth.usuario?.perfil}</p>
      </div>
  )
}

export default Gestor