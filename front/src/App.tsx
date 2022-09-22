import { Routes, Route } from 'react-router-dom'
import Login from "./components/Login"
import Home from "./components/Home"
import { RequireAuth } from './context/RequireAuth'
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'

function App() {
    const auth = useContext(AuthContext)

    const handleLogout = () => {
        auth.signout()
        window.location.href = ''
    }
        
    return (
        <>
            {auth.usuario && <button onClick={handleLogout}>Sair</button>}
            <Routes>
                <Route path="/" element={<RequireAuth><Home/></RequireAuth>}/>,
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </>
        
    )
}

export default App;