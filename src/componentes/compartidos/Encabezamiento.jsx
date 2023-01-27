import React from 'react'
import { ReactComponent as LogoSVG } from '../../img/logo.svg'
import { ReactComponent as PerfilSVG } from '../../img/perfil.svg'
import "../../styles/Encabezado.css"


export default function Encabezamiento() {
  return (
    <div className='encabezado' >
      <div  className='titulo'>
        <LogoSVG className='logo' ></LogoSVG>
      <a href="/">MetasApp</a>
      </div>
<nav  >
  <a href="/perfil" className='vinculo'>
<PerfilSVG className='h-6 w-6'></PerfilSVG>

  </a>
</nav>
      
    </div>
  )
}
