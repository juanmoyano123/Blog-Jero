import React from 'react';
import estilos from "../../styles/Meta.module.css"
import { Link } from 'react-router-dom';




const Meta = ({id,icono,completado,meta,eventos,periodo,detalles}) => {


    return (
        <Link to={`/lista/${id}`} className={estilos.meta + " tarjeta"}>
            <div className='flex items-center'>

                <div className={estilos.icono}>{icono}</div>
                    <p className="text-xl ml-1 mr-10">{eventos}
                    <sub className='text-xs text-gray-500'>/{periodo}</sub></p>
                    <p>{detalles}</p>
            </div>
            <div className="flex">
                <div>
                  <p className='flex justify-center'>{completado} de {meta}</p>
                    <div className={estilos.barra1}>
                    <div
              style={{
                width: `${Math.round((completado / meta) * 100)}%`,
              }}
              className={estilos.barra2}
            >
                    </div>
                    </div>
                </div>
                    <button className='boton boton--gris'>Completado</button>
            </div>
           
        </Link>
    );
}

export default Meta;
