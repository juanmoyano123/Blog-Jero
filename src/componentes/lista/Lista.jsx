import Meta from "./Meta";

function Lista() {
    const lista = 
[{
    "id":1,
   "detalles":"Correr por 30 minutos",
   "periodo":"dia",
   "eventos":1,
   "icono":"🏃‍♂️",
   "meta":366,
   "plazo":"2030/01/01",
   "completado":100
},
{
    "id":1,
   "detalles":"Correr por 30 minutos",
   "periodo":"dia",
   "eventos":1,
   "icono":"🏃‍♂️",
   "meta":366,
   "plazo":"2030/01/01",
   "completado":100
},
{
    "id":1,
   "detalles":"Leer libros",
   "periodo":"dia",
   "eventos":1,
   "icono":"🏃‍♂️",
   "meta":366,
   "plazo":"2030/01/01",
   "completado":100
},]
    return ( 
        lista.map(meta=><Meta {...meta}></Meta>)

     );
}

export default Lista;