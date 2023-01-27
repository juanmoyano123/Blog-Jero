import React from 'react'
import { ReactComponent as LogoSVG } from '../../img/logo.svg'
import { ReactComponent as PerfilSVG } from '../../img/perfil.svg'
import estilos from "../../styles/Encabezado.module.css"
import Vinculo from './Vinculo'

export default function Encabezamiento() {
  return (
    <header className={estilos.encabezado} >
      <div  className={estilos.titulo}>
        <Vinculo href={""}  Icono={LogoSVG}/>
        <LogoSVG className='logo' ></LogoSVG>
      <a className={estilos.titulo} href="/">MetasApp</a>
      </div>
<nav  >
  <a href="/perfil" className='vinculo'>
<Vinculo
href="./perfil"
Icono={PerfilSVG}
/>

  </a>
</nav>
      
    </header>
  )
}
