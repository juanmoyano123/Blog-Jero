import React from 'react'
import { useParams } from 'react-router'
import Detalles from '../nueva/Detalles'

function Modal() {

  return (
    <div className='flex items-center fixed '>
      {/* {JSON.stringify(estado.objetos[id])} */}
      <div className='mx-auto'>
    <Detalles></Detalles>
    </div>
    </div>
  )
}

export default Modal