import { AuthContext } from './AuthContext'
import { useState, useEffect } from 'react'
import { Usuario } from '../types/Usuario'

export const AuthProvider = ({children} : {children: JSX.Element}) => {

    const [usuario, setUsuario] = useState<Usuario | null>(null) 

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('token')
            if (storageData) {
                const data = await fetch(`${process.env.REACT_APP_SERVER}/getProfile`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then(resp => resp.json())
                .then((data) => {
                    return data
                }).catch(err => console.log(err))
                if (data.id) {
                    setUsuario(data);
                }
            }
        }
        validateToken();
    }, []);


    const signin = async (email: string, senha: string) => {
        const data = await fetch(`${process.env.REACT_APP_SERVER}/login`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, senha}),
        })
            .then((resp) => resp.json())
            .then((data) => {
                return data
            })
            .catch((err) => console.log(err))
        console.log(data)
        if (data.usuario && data.token) {
            setUsuario(data.usuario);
            setToken(data.token);
            return true;
        }
        return false;
    }

    const signout = () => {
        setUsuario(null)
        setToken('')
        console.log('singout')
    }

    const setToken = (token: string) => {
        localStorage.setItem('token', token);
    }

    return (
        <AuthContext.Provider value={{usuario, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}