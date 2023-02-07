import React from "react";
import { useState, useContext } from "react";
import { Contexto } from "../../servicios/Memoria";
import { useNavigate } from "react-router";

function Detalles() {
  let frecuencia = ["dia", "semana", "mes", "año"];
  const iconos = ["💻", "🏃‍♂️", "📚", "✈️", "💵"];
const navegar = useNavigate()
  const [form, setForm] = useState({
    detalles: "",
    eventos: 1,
    periodo: "semana",
    icono: "🏃‍♂️",
    meta: 52,
    plazo: "2030/02/02",
  });
  const { detalles, eventos, periodo, icono, meta, plazo, completado } = form;

  const [estado,enviar ] = useContext(Contexto);

  const crear = async ()=>{
    enviar({tipo:"crear",meta:form})
    navegar("/lista")
  }

  const onChange = (event, prop) => {
    setForm((estado) => ({ ...estado, [prop]: event.target.value }));
    console.log(form);
  };

  return (
    <div className="tarjeta">
      <form className="p-4" action="">
        {/* ------------------------------------ */}
        <label className="label">
          Describe tu meta
          <input
            type="text"
            className="input mr-6"
            placeholder="5 veces"
            value={detalles}
            onChange={(e) => onChange(e, "detalles")}
          />
        </label>
        {/* ------------------------------------ */}
        <label className="label">
          {" "}
          ¿Con que frecuencia deseas cumplir tu meta?
          <div className="flex mb-6">
            <input
              type="number"
              className="input mr-6"
              value={eventos}
              onChange={(e) => onChange(e, "eventos")}
            />
            <select name="" className="input">
              {frecuencia.map((opcion) => (
                <option value={periodo}>{opcion}</option>
              ))}
            </select>
          </div>
        </label>
        {/* ------------------------------------ */}
        <label className="label">
          {" "}
          ¿Cuantas veces deseas completar esta meta?
          <input
            type="number"
            className="input mr-6"
            value={meta}
            onChange={(e) => onChange(e, "meta")}
          />
        </label>
        {/* ------------------------------------ */}

        <label className="label">
          ¿Tienes una fecha limite?
          <input
            type="date"
            className="input mr-6"
            value={plazo}
            onChange={(e) => onChange(e, "plazo")}
          />
        </label>
        {/* ------------------------------------ */}

        <label className="label">
          ¿Cuantas veces completaste esta meta?
          <input
            type="number"
            className="input mr-6"
            value={completado}
            onChange={(e) => onChange(e, "completado")}
          />
        </label>
        {/* ------------------------------------ */}
        <label className="label">
          Escoge el icono
          <select name="" className="input mr-6" s id="">
            {iconos.map((iconos) => (
              <option value={icono} onChange={(e) => onChange(e, "icono")}>
                {iconos}
              </option>
            ))}
          </select>
        </label>
        {/* ------------------------------------ */}
      </form>

      <div className="flex justify-around pb-5">
        <button onClick={crear} className="boton boton--negro">Crear</button>
        <button className="boton boton--gris">Cancelar</button>
      </div>
    </div>
  );
}

export default Detalles;
