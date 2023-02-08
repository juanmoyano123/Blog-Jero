import React from "react";
import Encabezamiento from "./Encabezamiento";
import Principal from "./Principal";
import Pie from "./Pie";
import { Outlet } from "react-router";
/* import Lista from "../lista/Lista";
import Detalles from "../nueva/Detalles"; */

const Layout = ({props}) => {
  return (
    <>
      <Encabezamiento></Encabezamiento>
      <Principal>
       
       <Outlet></Outlet>

       </Principal>
      <Pie></Pie>
    </>
  );
};

export default Layout;
