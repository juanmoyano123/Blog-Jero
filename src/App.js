import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bienvenida from './pages/Bienvenida';
import Inicio from './pages/Inicio';
import UltimoProyectos from './pages/UltimoProyectos';
import NuestroTrabajo from './pages/NuestroTrabajo';
import ComoTeAyudamos from './pages/ComoTeAyudamos';
import Equipo from './pages/Equipo';

import Contacto from "./pages/Contacto"
import HeaderFooter from './layout/HeaderFooter';


function App() {
  return (
   <BrowserRouter>
   <HeaderFooter>
  <Routes>
      <Route path='/' element={<Bienvenida/>} />
      <Route path='/home' element={<Inicio/>} />
      <Route path='/ultimos' element={<UltimoProyectos/>} />
      <Route path='/nosotros' element={<NuestroTrabajo/>} />
      <Route path='/trabajo' element={<ComoTeAyudamos/>} />
      <Route path='/equipo' element={<Equipo/>} />
      <Route path='/contacto' element={<Contacto/>} />
  </Routes>
  </HeaderFooter>
   </BrowserRouter>
   
  );
}

export default App;
