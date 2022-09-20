import {BrowserRouter, Routes, Route } from 'react-router-dom';
import  { useState } from 'react'
import Login from "./components/Login"
import Home from "./components/Home"
import { render } from 'react-dom';

function App() {
    const [ isAuthenticated, setIsAuthenticated ] = useState(false)

    return (
        
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home/>}/>,
                    <Route path="/login" element={<Login/>}/>
                </Routes>
                
            </BrowserRouter>
    )
}

export default App;