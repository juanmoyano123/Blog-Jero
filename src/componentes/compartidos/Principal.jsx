import React from 'react';
import Vinculo from './Vinculo';
import { ReactComponent as ListaSVG } from '../../img/lista.svg';
import { ReactComponent as NuevaSVG } from '../../img/nueva.svg';
import estilos from "../../styles/Principal.module.css"


export default function Principal({children}) {
  return (
    <div className={estilos.principal}>
        <aside className={estilos.aside}>
            <Vinculo 
            href="/lista" 
            texto="Lista de Metas"
            Icono={ListaSVG}
            >
             
            </Vinculo >
            <Vinculo 
            href="/crear" 
            texto="Nueva Meta"
            Icono={NuevaSVG}
            >
            </Vinculo>
        </aside>
        <main className={estilos.main}>
            {children}
        </main>
    </div>
  )
}
