import React, { Fragment } from 'react';
import './App.css';
import CadastroUsuario from './components/CadastroUsuario'
import TabelaUsuarios from './components/TabelaUsuarios';

function App() {
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

export default App;