import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bienvenida from './pages/Bienvenida';
import ComoTeAyudamos from './pages/ComoTeAyudamos';
import NuestroTrabajo from './pages/NuestroTrabajo';
import UltimoProyectos from './pages/UltimoProyectos';
import Contacto from "./pages/Contacto"


function App() {
  return (
   <BrowserRouter>
  <Routes>
      <Route path='/' element={<Bienvenida/>} />
      <Route path='/ultimos' element={<UltimoProyectos/>} />
      <Route path='/nosotros' element={<NuestroTrabajo/>} />
      <Route path='/trabajo' element={<ComoTeAyudamos/>} />
      <Route path='/contacto' element={<Contacto/>} />
  </Routes>
   </BrowserRouter>
   
  );
}

export default App;
