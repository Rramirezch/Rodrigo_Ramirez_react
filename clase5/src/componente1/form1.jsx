
import { useEffect, useState } from "react"

const Form = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState()

    useEffect(() => {
        setTimeout(() => {
        }, 5000)
    }, [error])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (user == '') alert('Usuario no debe ir vacio')
        if(password.length <= 8) alert('La contraseña debe tener mas de 8 caracteres')
        if(user ==='usuario' && password === ('clave de 8 digitos') 
            setSuccess{(`Bienvenido ${user} Te has logueado con exito`)}
        
            console.log(user)
    }
        
    return (

        
        <form onSubmit={}>
            <div>
            <label>Nombre de usuario</label>
            <input required value={user}onChange={(e) => setUser(e.target.value)}type="text" />
            </div>
            <div>
            <label>Contraseña</label>
            <input required value={password}onChange={(e) => setPassword(e.target.value)}type="password" />
            </div>
            <button type="=submit">Iniciar sesion</button>
            
        
        <form/>
        {error && (
            <h2></h2>
        )}
        {success && (
            <h2></h2>
        )}
    )
}

export default Form