import React from 'react';
import estilos from "../../styles/Meta.module.css"

const Meta = () => {
    return (
        <div className={estilos.meta + " tarjeta"}>
            <div className='flex items-center'>

                <div className={estilos.icono}>🏃‍♂️</div>
                    <p className="text-xl ml-5 mr-10">1 
                    <sub className='text-xs text-gray-500'>/semana</sub></p>
                    <p>detalles</p>
            
            </div>

            <div className="flex">
                <div>
                  <p>  4 de 5</p>
                    <div>
                        <div></div>
                    </div>
                </div>
                    <button>Completado</button>
            </div>
           
        </div>
    );
}

export default Meta;
