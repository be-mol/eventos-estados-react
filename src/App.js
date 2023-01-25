import Boton from './components/Boton'
import { useState } from 'react';

function App() {

  //Estados

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  //Estado del botón

  const [botonEnabled, setBotonEnabled] = useState(false);

  //Evaluación input
  
  const evalInputContent =(e) => {
    
    if (name.length > 0 && password.length > 0) {
      setBotonEnabled(true);
    } else {
      setBotonEnabled(false);
    }    
  }

  //Handle Submit

  const handleSubmit = (e) => {
    e.preventDefault()

  //Validacion
  
    if (name === 'ADL' && password === '252525') {
      alert('Los datos ingresados son correctos')
    } else {
      alert('Los datos ingresados son incorrectos')
    }    
  }

  //Return

  return (
    <div className="container">
      <div className='titulo'>
        <h2>Iniciar Sesión</h2>
      </div>
      <div className='formulario'>
        <form onSubmit={handleSubmit}>      
          <div>
            <label htmlFor='name'>Nombre:</label>
            <input 
            type="text" 
            id='name' 
            className='form-control'
            defaultValue={name}
            onChange={(e)=>setName(e.target.value) & evalInputContent()}
            value={name}
            />            

          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type="password"
            id='password'
            className='form-control'
            defaultValue={password}
            onChange={(e)=>setPassword(e.target.value) & evalInputContent()} 
            value={password}
            /> 
          </div>
          <div>
            {botonEnabled && <Boton button = "Iniciar Sesión"/>}
          </div>
        </form>
        </div>
    </div>
  );
  }

export default App;
