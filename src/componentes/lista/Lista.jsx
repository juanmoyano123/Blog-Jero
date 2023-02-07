import Meta from "./Meta";
import { useContext } from "react";
import { Contexto } from "../../servicios/Memoria";

const lista = [
  {
    id: 1,
    detalles: "Correr por 30 minutos",
    periodo: "dia",
    eventos: 1,
    icono: "🏃‍♂️",
    meta: 366,
    plazo: "2030/01/01",
    completado: 100,
  },
  {
    id: 1,
    detalles: "Correr por 30 minutos",
    periodo: "dia",
    eventos: 1,
    icono: "🏃‍♂️",
    meta: 366,
    plazo: "2030/01/01",
    completado: 100,
  },
  {
    id: 1,
    detalles: "Leer libros",
    periodo: "dia",
    eventos: 1,
    icono: "🏃‍♂️",
    meta: 366,
    plazo: "2030/01/01",
    completado: 100,
  },
];

function Lista() {
  const prueba = useContext(Contexto);
  console.log(prueba);

  return (
    lista.map((meta) => <Meta {...meta}></Meta>)
    );
}

export default Lista;
