import React, { useContext, useState } from 'react';



function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
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
                    <button type="submit" className="btn btn-primary">Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default Login