import React, {useState} from 'react';
import {useForm} from "../hooks/useForm";
import {v4 as uuidv4} from 'uuid';

export const Formulario = ({crearCita}) => {

    const initialstate = {
        mascota: "",
        propietario: '',
    }
    const [error, setError] = useState(false);

    const [values, handleInputChange, reset] = useForm(initialstate)

    const {mascota, propietario} = values

    const submitCita = e => {
        e.preventDefault();

        // Validar
        if (mascota.trim() === '' || propietario.trim() === '') {
            setError(true);
            return;
        }
        // Eliminar el mensaje previo
        setError(false);

        // Asignar un ID
        values.id = uuidv4();

        // Crear la cita
        crearCita(values);

        // Limpiar Formulario
        reset();


    }
    return (
        <>
            <div>
                <div>
                    {(error) && <p className='alerta-error'>
                        Todos los campos son obligatorios</p>}

                    <form onSubmit={submitCita}>
                        <label>Nombre de la Mascota</label>
                        <input
                            className='u-full-width '
                            type="text"
                            name="mascota"
                            placeholder='Nombre de la mascota'
                            value={mascota}
                            onChange={handleInputChange}
                        />
                        <label>Madre de la Mascota</label>
                        <input
                            className='u-full-width '
                            type="text"
                            name="propietario"
                            placeholder='Responsable de la Mascota'
                            value={propietario}
                            onChange={handleInputChange}
                        />
                        <button
                            type='submit'
                            className='button'>
                            Agendar Cita
                        </button>
                    </form>
                </div>

            </div>
        </>
    );
};


