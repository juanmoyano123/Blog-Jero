import React from 'react'
import { useParams } from 'react-router'

function Modal() {
  const {id}= useParams()
  return (
    <div>{id}</div>
  )
}

export default Modal