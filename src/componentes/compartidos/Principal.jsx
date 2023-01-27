import React from 'react'

export default function Principal({children}) {
  return (
    <>
        <sidenav>
            <a href="/lista">Lista</a>
            <a href="/crear">Crear</a>
        </sidenav>
        <main>
            {children}
        </main>
    </>
  )
}
