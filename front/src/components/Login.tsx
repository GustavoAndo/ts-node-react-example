import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleLogin = async (e: any) => {
        e.preventDefault()
        if (email) {
            const isLogged = await auth.signin(email, senha);
            if (isLogged) {
                navigate('/');
            } else {
                alert("Email ou senha inválidos");
            }
        } else {
            alert("Preencha o email");
        }
    }

    return (
        
        <div className="container">
            <form>
                <h1 className="text-center mt-5">Login</h1>
                <div className="form-group">
                    <label htmlFor="email">Email</label><br/>
                        <input type="email" name="email" id="email" className="form-control"
                            onChange={e => setEmail(e.target.value)}
                        />
                </div>
                <div className="form-group">
                    <label>Senha</label><br/>
                    <input type="password" className="form-control"
                        onChange={e => setSenha(e.target.value)}
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary" onClick={handleLogin}>Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default Login