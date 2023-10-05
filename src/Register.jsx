import React from 'react'
import { useState } from 'react'
import axios from 'axios';
function Register() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        contrasena: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3000/api/register',
            { nombre: formData.nombre, 
            email: formData.email,
            contrasena: formData.contrasena }).then(res=>{
                if (res.data.status == "1") {
                    alert('Usuario ya existente, intente otro correo');
                }else{
                    alert('Usuario creado,redirigiendo a login');
                    location.replace('/login');
                }
            }).catch(error=>{
                console.log('Error en la peticion: '+error);
            });
    }

    return (
        <>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="nombre">Nombre:</label>
                <input type="text" name="nombre" id="nom1" required onChange={handleChange} />
                <br />

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="em1" required onChange={handleChange} />
                <br />

                <label htmlFor="contrasena">Contraseña</label>
                <input type="password" name="contrasena" id="pass1" required onChange={handleChange} />
                <br />

                <input type="submit" value="Registrarme" />

            </form>
        </>
    )
}

export default Register