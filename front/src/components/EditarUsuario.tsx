import React, { Fragment, useState } from 'react'

interface UsuarioDto {
    id: number,
    nome: string,
    email: string,
    dinheiro: number,
    nro_jogos: number
}

interface Props {
    usuario: UsuarioDto
}

function EditarUsuario({ usuario }: Props) {
    const [nome, setNome] = useState(usuario.nome)
    const [email, setEmail] = useState(usuario.email)
    const [nro_jogos, setNro_jogos] = useState(usuario.nro_jogos)
    const [dinheiro, setDinheiro] = useState(usuario.dinheiro)
  
    const editarUsuario = async (e: any) => {
      e.preventDefault();
      try {
        const body = { nome, email, nro_jogos, dinheiro};
        const response = await fetch('http://localhost:5000/atualizarUsuario/' + usuario.id, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        console.log(response)
        window.location.href = '/'
      } catch (err:any) {
        console.error(err.message);
      }
    };

    const cancelar = () => {
        setNome(usuario.nome)
        setEmail(usuario.email)
        setNro_jogos(usuario.nro_jogos)
        setDinheiro(usuario.dinheiro)
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#editarId${usuario.id}`}>
            Editar
            </button>
            <div className="modal fade" id={`editarId${usuario.id}`} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-primary" id="exampleModalLongTitle">Editar dados do usuário</h5>
                    <button 
                        type="button" 
                        className="close" 
                        data-dismiss="modal" 
                        aria-label="Close"
                    >
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <input 
                        type='text' 
                        placeholder='Nome' 
                        className='form-control mb-2' 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input 
                        type='email' 
                        placeholder='Email' 
                        className='form-control mb-2' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type='number' 
                        placeholder='Número de Jogos' 
                        className='form-control mb-2' 
                        value={nro_jogos}
                        onChange={(e:any) => setNro_jogos(e.target.value)}
                    />
                    <input 
                        type='text' 
                        placeholder='Dinheiro' 
                        className='form-control mb-2' 
                        value={dinheiro}
                        onChange={(e:any) => setDinheiro(e.target.value)}
                    />
                </div>
                <div className="modal-footer">
                    <button 
                        type="button" 
                        className="btn btn-secondary"
                        data-dismiss="modal" 
                        onClick={cancelar}                   
                    >Cancelar</button>
                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        data-dismiss="modal"
                        onClick={editarUsuario} 
                    >Editar</button>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default EditarUsuario;