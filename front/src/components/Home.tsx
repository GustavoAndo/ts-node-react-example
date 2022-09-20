import React, { Fragment } from 'react'
import CadastroUsuario from './CadastroUsuario'
import TabelaUsuarios from './TabelaUsuarios'

function Home() {
    
  return (
      <Fragment>
      <div className="container">
        <h1 className="text-center mt-5">Tabela Usuarios</h1>
        <CadastroUsuario></CadastroUsuario>
        <TabelaUsuarios></TabelaUsuarios>
      </div>
    </Fragment>
  )
}

export default Home