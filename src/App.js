import './App.css';
import Encabezamiento from './componentes/compartidos/Encabezamiento';
import Principal from './componentes/compartidos/Principal';
import Pie from "./componentes/compartidos/Pie"


function App() {
  return (
    <div className="App">
     <h1 >To do List</h1>
      <Encabezamiento></Encabezamiento>
      <Principal></Principal>
      <Pie></Pie>
    </div>
  );
}

export default App;
