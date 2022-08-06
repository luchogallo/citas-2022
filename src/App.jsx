import React, { useState } from 'react'
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { ListadoPacientes } from './components/ListadoPacientes';

function App() {

  // state que contiene informacion del paciente
  const [pacientes, setPacientes] = useState([]);

  //state que sirve para eventos de editar y eliminar paciente
  const [paciente, setPaciente] = useState({});

  // eliminar paciente
  const eliminarPaciente = (id) => {

    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id );

    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header
      />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          //prop para editar y eliminar paciente
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          //prop para editar y eliminar paciente
          setPaciente={setPaciente}
          //eliminarPaciente
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App;
