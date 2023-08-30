import "./Colaborador.css"
import {BsFillTrashFill} from "react-icons/bs"


const Colaborador = (props) => {
    const {nombre,puesto,foto,equipo,id} = props.datos
    const {color,eliminarColaborador} = props
    console.log(equipo)
    return <div className="colaborador">
        <BsFillTrashFill onClick={() =>eliminarColaborador(id)} className="eliminar"/>
        <div className="encabezado" style={{backgroundColor:color}}>
            <img src={foto} alt="foto"></img>
        </div>

        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}
export default Colaborador