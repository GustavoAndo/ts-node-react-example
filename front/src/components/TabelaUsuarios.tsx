import { Fragment, useEffect, useState } from 'react'
import EditarUsuario from './EditarUsuario'
import ExcluirUsuario from './ExcluirUsuario'

interface UsuarioDto {
    id: number,
    nome: string,
    email: string,
    dinheiro: number,
    nro_jogos: number
}

function TabelaUsuarios() {
    const [usuarios, setUsuarios] = useState<UsuarioDto[]>([])

    const getUsuarios = async() => {
        try {
            const response = await fetch('http://localhost:5000/usuarios')
            const jsonData = await response.json()
            setUsuarios(jsonData)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getUsuarios()
    }, [])

    return (
        <Fragment>
            <table className="table table-striped mt-4 text-center">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nº de Jogos</th>
                    <th scope="col">Dinheiro</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map(usuario => (
                    <tr key={usuario.id}>
                        <td>{usuario.nome}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.nro_jogos}</td>
                        <td>{usuario.dinheiro}</td>
                        <td>
                            <EditarUsuario usuario={usuario}></EditarUsuario>
                            <ExcluirUsuario idUsuario={usuario.id}></ExcluirUsuario>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </Fragment>
    ) 
}

export default TabelaUsuarios