import "./optionList.css"


const OptionList = (props) => {
    
    const manejarCambio = (e) =>{
        props.changeValor(e.target.value)
    }

    return <div className="option_list">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default OptionList