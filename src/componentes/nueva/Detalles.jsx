import React from "react";

let frecuencia = ["dia", "semana", "mes", "año"];
const iconos = ["💻", "🏃‍♂️", "📚", "✈️", "💵"];

function Detalles() {
  return (
    <div className="tarjeta">
      <form className="p-4" action="">
        <label className="label">
          Describe tu meta
          <input type="text" className="input mr-6" placeholder="5 veces" />
        </label>

        <label className="label">
          {" "}
          ¿Con que frecuencia deseas cumplir tu meta?
          <div className="flex mb-6">
            <input type="number" className="input mr-6" />
            <select name="" className="input">
              {frecuencia.map((opcion) => (
                <option value={opcion}>{opcion}</option>
              ))}
            </select>
          </div>
        </label>

        <label className="label">
          {" "}
          ¿Cuantas veces deseas completar esta meta?
          <input type="number" className="input mr-6" />
        </label>

        <label className="label">
          ¿Tienes una fecha limite?
          <input type="date" className="input mr-6" />
        </label>

        <label className="label">
          ¿Cuantas veces completaste esta meta?
          <input type="number" className="input mr-6" />
        </label>

        <label className="label">
          Escoge el icono
          <select name="" className="input mr-6" s id="">
            {iconos.map((iconos) => (
              <option value={iconos}> {iconos} </option>
            ))}
          </select>
        </label>
      </form>
      <div className="flex justify-around pb-5">
        <button className="boton boton--negro">Crear</button>
        <button className="boton boton--gris">Cancelar</button>
      </div>
    </div>
  );
}

export default Detalles;
