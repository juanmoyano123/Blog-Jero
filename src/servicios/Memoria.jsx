import React, { useReducer } from "react";
import { createContext } from "react";

const lista = [
  {
    id: 1,
    detalles: "Correr por 10 minutos",
    periodo: "dia",
    eventos: 4,
    icono: "🏃‍♂️",
    meta: 366,
    plazo: "2030/01/01",
    completado: 100,
  },
  {
    id: 2,
    detalles: "Correr por 60 minutos",
    periodo: "dia",
    eventos: 6,
    icono: "🏃‍♂️",
    meta: 366,
    plazo: "2030/01/01",
    completado: 100,
  },
  {
    id: 3,
    detalles: "Leer libros",
    periodo: "dia",
    eventos: 1,
    icono: "🏃‍♂️",
    meta: 367,
    plazo: "2030/01/01",
    completado: 180,
  },
];


const estadoInicial ={
  orden:[], //lista de identificaciones de cada uno de los elemtnos
  objetos:{} //va a guardar un map de la identificacion de cada meta y asignar a cada meta completa
}

function reductor (estado, accion){
  switch (accion.tipo) {
    case "colocar": {
      const metas = accion.metas;
      const nuevoEstado = {
        orden: metas.map((meta) => meta.id),
        objetos: metas.reduce(
          (objeto, meta) => ({ ...objeto, [meta.id]: meta }),
          {}
        ),
      };
      // localStorage.setItem('metas', JSON.stringify(nuevoEstado))
      return nuevoEstado;
    }
    case "crear": {
      const id = accion.meta.id; // String(Math.random());
      const nuevoEstado = {
        orden: [...estado.orden, id],
        objetos: {
          ...estado.objetos,
          [id]: accion.meta,
        },
      };
      // localStorage.setItem('metas', JSON.stringify(nuevoEstado))
      return nuevoEstado;
    }
    case "actualizar": {
      const id = accion.meta.id;
      estado.objetos[id] = {
        ...estado.objetos[id],
        ...accion.meta,
      };
      const nuevoEstado = { ...estado };
      // localStorage.setItem('metas', JSON.stringify(nuevoEstado))
      return nuevoEstado;
    }
    case "borrar": {
      const id = accion.id;
      const nuevoOrden = estado.orden.filter((item) => item !== id);
      delete estado.objetos[id];
      const nuevoEstado = {
        orden: nuevoOrden,
        objetos: estado.objetos,
      };
      // localStorage.setItem('metas', JSON.stringify(nuevoEstado))
      return nuevoEstado;
    }
    default:
      throw new Error();
  }
}

const metas=(reductor(estadoInicial,{tipo:"colocar", metas:lista}))

export const Contexto = createContext(null);

function Memoria({ children }) {

 const [estado, enviar]= useReducer(reductor, metas)
  return (
  <Contexto.Provider value={[estado, enviar]}>
    {children}
    </Contexto.Provider>
    );
}

export default Memoria;
