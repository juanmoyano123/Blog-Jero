import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./componentes/compartidos/Layout";
import Lista from "./componentes/lista/Lista";
import Detalles from "./componentes/nueva/Detalles";
 import Modal from "./componentes/compartidos/Modal";
 import Noencontrado from "./componentes/compartidos/NoEncontrado";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Lista />} />
        <Route path="/lista" element={<Lista />} >
        <Route path="/lista/:id" element={<Modal/>}/>

        </Route>
        <Route path="/nueva" element={<Detalles />} />
      </Route>
        <Route path="*" element={<Noencontrado/>}/>
    </Routes>
  );
}

export default App;
