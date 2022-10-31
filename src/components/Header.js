import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
export default function Header() {

const page = [
    { _id: 1, name: 'Bienvenida', to: '/' },
    { _id: 2, name: 'Inicio', to: '/home' },
    { _id: 3, name: 'Ultimos Proyectos', to: '/ultimos' },
    { _id: 4, name: 'Nuestro Trabajo', to: '/trabajo' },
    { _id: 5, name: 'Contacto', to: '/contacto' },
]


  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">DYMSA</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><a><LinkRouter to="/home">Home</LinkRouter></a></li>
      <li tabIndex={0}>
        <a> <LinkRouter to="/ultimos"> Ultimos Proyectos</LinkRouter>
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
            </svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>La Pampa</a></li>
          <li><a>Centauros</a></li>
        </ul>
      </li>
      <li><a> <LinkRouter to="/trabajo">¿Como trabajamos? </LinkRouter></a></li>
      <li><a><LinkRouter to="/equipo" >Equipo </LinkRouter></a></li>
      <li><a><LinkRouter to="/contacto" >Contacto </LinkRouter></a></li>

    </ul>
  </div>
</div>
  )
}
