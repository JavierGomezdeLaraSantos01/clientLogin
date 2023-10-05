import React from 'react'
import { useState } from 'react'
import axios from 'axios';
function Login() {

    const [formData, setFormData] = useState({
        email: '',
        contrasena: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(
            {
                ...formData,
                [name]: value
            }
        )
    }

    function handleLogin(e) {
        e.preventDefault();
        axios.post('http://localhost:3000/api/login', {
            email: formData.email, contrasena: formData.contrasena
        }).then(res=>{
            alert('Inicio de sesion satisfactorio');
            localStorage.setItem('usuario',res.data.usuario);
        }).catch(err=>{
            if (err.response.status == 401) {
                alert('Email o contraseña incorrectos')
            }
        });
    }

    return (
        <>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleLogin}>

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="em1"
                    onChange={handleChange} value={formData.email} />

                <br />
                <label htmlFor="contrasena">Contrasena:</label>
                <input type="password" name="contrasena" id="pass1"
                    onChange={handleChange} value={formData.contrasena} />

                <br />
                <input type="submit" value="Iniciar sesion" />
            </form>
        </>
    )
}

export default Login