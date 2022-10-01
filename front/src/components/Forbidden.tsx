import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

function Admin() {
  const auth = useContext(AuthContext)

  return (
    <div className="container">
        <h1 className="text-center mt-5">Proibido!</h1>
        <p>Você não possui nível para acessar esta página.</p>
      </div>
  )
}

export default Admin