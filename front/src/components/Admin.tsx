import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import Grafico from './Grafico'
import {
  lineChartOptions,
} from '../Data'
import { exportPdf } from '../utils'

function Admin() {
  const auth = useContext(AuthContext)

  return (
    <div className="container">
        <h1 className="text-center mt-5">Página Admin</h1>
        <p>Bem-vindo, {auth.usuario?.nome}!, você é do perfil: {auth.usuario?.perfil}</p>
        <div> 
          <Grafico chartOptions={lineChartOptions} />
        </div>
        <button onClick={exportPdf}>Exportar Pdf</button>
      </div>
      
  )
}

export default Admin