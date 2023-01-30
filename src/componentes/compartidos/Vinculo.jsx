import React from "react";
import estilos from "../../styles/Vinculo.module.css";
import { Link } from "react-router-dom";

export default function Vinculo({ Icono, texto, to }) {
  return (
    <Link to={to} className={estilos.vinculo}>
      <Icono className={estilos.icono} />
      <span className={estilos.texto}> {texto} </span>
    </Link>
  );
}
