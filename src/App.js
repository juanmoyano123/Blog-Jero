import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./componentes/compartidos/Layout";
import Lista from "./componentes/lista/Lista.jsx";
import Detalles from "./componentes/nueva/Detalles.jsx";
import NoEncontrado from "./componentes/compartidos/NoEncontrado";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/lista" element={<Lista />} />
        <Route index element={<Lista />} />
        <Route path="/nueva" element={<Detalles />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  );
}

export default App;
