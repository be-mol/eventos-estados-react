const Input = (props) => {
    const escribirNombre = (e) => props.setNombre(e.target.value)
    const escribirPassword = (e) => props.setPassword(e.target.value)
    
    return(
        <div>
            <div>
                <label>Nombre</label>
                <input type="text" onChange={escribirNombre} />            
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password" onChange={escribirPassword}/>
            </div>
        </div>
    )
}

export default Input;