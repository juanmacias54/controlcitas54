import React from 'react';

export const Citas = ({cita , eliminarCita}) => {

    const {id,mascota,propietario}= cita;

    return (
        <>
            <div className='cita'>
                <div className='row'>
                    <p>Id :{id}</p>
                    <p>Nombre de la Mascota: {mascota}</p>
                    <p>Nombre del Propietario: {propietario}</p>
                </div>
            </div>
            <button
                className='button button-primary'
                onClick={()=>eliminarCita(id)}
            >Eliminar
            </button>
        </>
    );
};


