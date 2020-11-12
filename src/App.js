import React, {useEffect, useState} from 'react';
import {Formulario} from "./Components/Formulario";
import {Citas} from "./Components/Citas";

export const App = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('citas')) || [];
    }

    const [citas, setCitas] = useState(init);

    useEffect(() => {localStorage.setItem('citas',JSON.stringify(citas))
    }, [citas]);


    const crearCita = cita => {
        setCitas([
            ...citas, cita
        ])
    }
    //Eliminar Citas
    const eliminarCita = id => {
        const nuevasCitas = citas.filter(cita => cita.id !== id)
        setCitas(nuevasCitas)

    }


    //Mensaje Titulo Citas
    const titulo = citas.lenght===0
        ?'Control de Citas'
        :'Favor Agregar Cita';

    return (
        <>
            <h1 className='titulo'>Control de Citas</h1>
            <div className="container">
                <div className='row'>
                    <div className="one-half column">
                        <h3>Control de Citas</h3>
                        <Formulario
                            crearCita={crearCita}
                        />
                    </div>
                    <div className="one-half column">
                        <h3>{titulo}</h3>
                        {citas.map(cita => (
                            <Citas
                                key={cita.id}
                                cita={cita}
                                eliminarCita={eliminarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}