import Colaborador from "../Colaborador"
import "./Equipo.css"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) =>{

    const {id,title,color} =props.datos
    const {colaboradores,eliminarColaborador,updateColor} = props

    const obj = {
        backgroundColor:hexToRgba(color,0.6)
    }

    return <> {colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <input 
                className="select_color"
                type="color"
                value={color}
                onChange={(event) =>{
                    updateColor(event.target.value,id)
                }}
            />
            <h3 style={{borderColor:color}}>{title}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador,index) => {
                        return <Colaborador 
                        datos={colaborador} 
                        key ={index}
                        color={color}
                        eliminarColaborador = {eliminarColaborador}/>
                    })
                }
                
            </div>
        </section>
    }</>
    
}
export default Equipo