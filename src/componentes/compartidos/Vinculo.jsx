import React from 'react'
import estilos from "../../styles/Vinculo.module.css"

export default function Vinculo({Icono,texto, href}) {
  return (
    <a href={href} className={estilos.vinculo}>
       <Icono className={estilos.icono}/>
        <span className={estilos.texto} > {texto} </span>
    </a>
  )
}
