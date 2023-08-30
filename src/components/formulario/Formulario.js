import "./Formulario.css"
import TextInput from "../TextInput/TextInput" 
import OptionList from "../optionList"
import Boton from "../Boton"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';



const Formulario = (props) => {

    const [nombre, setName] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")



    const manejarEnvio = (e) =>{
        e.preventDefault()
        const datosSend = {
            id:uuidv4(),
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }

        props.registrarColaborador(datosSend)
        setName("")
        setFoto("")
        setPuesto("")
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador
            </h2>
            <TextInput 
            label="Nombre" 
            placeholder = "Ingrese el nombre" 
            required
            valor = {nombre}
            changeValor = {setName}
            />

            <TextInput 
            label="Puesto" 
            placeholder = "Ingrese el puesto" 
            required
            valor = {puesto}
            changeValor = {setPuesto}/>

            <TextInput 
            label="Foto" 
            placeholder = "Ingrese la url de la foto" 
            required
            valor = {foto}
            changeValor = {setFoto}/>

            <OptionList 
            valor ={equipo} 
            changeValor = {setEquipo} 
            equipos={props.equipos}/>

            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}


export default Formulario