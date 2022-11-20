import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import CadastroUsuario from './CadastroUsuario'
import TabelaUsuarios from './TabelaUsuarios'

function Home() {
  const auth = useContext(AuthContext)
  return (
      <Fragment>
      <div className="container">
        <p>Bem-vindo, {auth.usuario?.nome}!</p>
        {(auth.usuario?.perfil === 'gestor' || auth.usuario?.perfil === 'administrador') && (
          <Link to="/gestor"><button className='btn btn-warning'>Página Gestor</button></Link>
        )}
        {auth.usuario?.perfil === 'administrador' && (
          <Link to="/administrador"><button className='btn btn-danger'>Página Admin</button></Link>
        )}
        
        
        <h1 className="text-center mt-5">Tabela Usuarios</h1>
        <CadastroUsuario></CadastroUsuario>
        <TabelaUsuarios></TabelaUsuarios>

      </div>
    </Fragment>
  )
}

export default Home