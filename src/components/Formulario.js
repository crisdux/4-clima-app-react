import React, {useState} from 'react'
import Error from './Error';
function Formulario({busqueda,setBusqueda,setConsultar}) {
    const {ciudad,pais} = busqueda;
    const [error,setError] = useState(false);
    const handleInput = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const enviarFormulario = e => {
        e.preventDefault();
        if(ciudad.trim() ==='' || pais.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        setConsultar(true)
      

    }
    return (
        <form onSubmit={enviarFormulario}>
        {error && <Error descripcion="Todos los campos son obligatorios"/>}
            <div className="form-group">
                <label htmlFor="ciudad">Ciudad:</label>
                <input 
                    type="text" 
                    id="ciudad"
                    name="ciudad"
                    placeholder="Escriba su ciudad..."
                    className="form-control"
                    value={ciudad}
                    onChange={handleInput}
                />
            </div>
            <div className="form-group">
            <label htmlFor="pais">País</label>
                <select 
                    className="custom-select"
                    id="pais"    
                    name="pais"
                    value={pais}
                    onChange={handleInput}
                >
                    <option value="">--Seleccione un pais--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="BO">Bolivia</option>       
                </select>
            </div>

            <input type="submit" className="btn btn-outline-dark btn-lg btn-block" value="Enviar"/>
        </form>
    )
}

export default Formulario
