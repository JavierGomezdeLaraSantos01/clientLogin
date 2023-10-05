import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <>
    <Router>
        <div>
            <nav>
                <ul>
                    <li><Link to={'/register'}>Registro</Link></li>
                    <li><Link to={'/login'}>Inicio de sesion</Link></li>
                </ul>
            </nav>
        </div>

        <Routes>
        <Route path="/register" Component={Register}/>
        <Route path="/login" Component={Login}/>
        </Routes>
    </Router>
    </>
  )
}

export default App