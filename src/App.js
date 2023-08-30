import './App.css';
import Header from './components/header/Header';
import Formulario from './components/formulario/Formulario';
import MiOrg from './components/MiOrg';
import { useState } from 'react';
import Equipo from './components/Equipo';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [showForm, changeShowForm] = useState(false)
  const [colaboradores, updateColaboradores] = useState(
    [{id:uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {id:uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/genesysR-dev.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora"
    },
    {id:uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam"
    },
    {id:uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor"
    },
    {id:uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack"
    }])

  const [equipos, updateEquipos] = useState(
    [
      {
        id:uuidv4(),
        title: "Programación",
        color: "#57C278"
      },
      {
        id:uuidv4(),
        title: "Front End",
        color: "#82CFFA"
      },
      {
        id:uuidv4(),
        title: "Data Science",
        color: "#A6D157"
      },
      {
        id:uuidv4(),
        title: "Devops",
        color: "#E06B69"
      },
      {
        id:uuidv4(),
        title: "UX y Diseño",
        color: "#DB6EBF"
      },
      {
        id:uuidv4(),
        title: "Móvil",
        color: "#FFBA05"
      },
      {
        id:uuidv4(),
        title: "Innovación y  Gestión",
        color: "#FF8A29"
      }
  
    ]
  )

  const switchShowForm = () => {
    changeShowForm(!showForm)
    console.log(showForm)
  }

  const registrarColaborador = (colaborador) => {
    updateColaboradores([...colaboradores, colaborador])
    console.log(colaborador)
  }

  const eliminarColaborador = (id) => {
    console.log(`Eliminando colaborador con id = ${id}`)
    const nuevosColaboradores = colaboradores.filter((colaborador =>colaborador.id!==id))
    updateColaboradores(nuevosColaboradores)
  }

  const updateColor = (newColor,id) =>{
    const equiposUpdated = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.color = newColor
      }
      return equipo
    })
    updateEquipos(equiposUpdated)
  }

  return (
    <div>
      <Header></Header>
      {showForm && <Formulario
        equipos={equipos.map((equipo) => equipo.title)}
        registrarColaborador={registrarColaborador} />}

      <MiOrg showForm={switchShowForm}></MiOrg>
      {
        equipos.map((equipo) => {
          return <Equipo
            datos={equipo}
            key={equipo.title}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.title)}
            eliminarColaborador={eliminarColaborador}
            updateColor = {updateColor}
          ></Equipo>
        })
      }
    </div>
  );
}

export default App;
