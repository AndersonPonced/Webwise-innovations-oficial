 import './App.css';
import './css/style.css'
import Principal from './components/principal';
import Barra from './components/barra';
import Plan from './components/plan';
import Contenido from './components/contenido';
// import SomosLaSolicion from './components/somosLaSolucion';
import Porque from './components/porque';
import Footer from './components/footer';
import Clientes from './components/clientes';
// import Importancia from './components/importancia';
  function App() {
  return (
    <div className="App">

<Principal/>
 <Barra/>
 <Plan/>
 <Contenido/>
 {/* <SomosLaSolicion/> */}
 <Clientes/>
 <Porque/>
 {/* <Importancia/> */}
 <Footer/>
    </div>
  );
}

export default App;
