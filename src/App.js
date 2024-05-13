 import './App.css';
import './css/style.css'
import Principal from './components/principal';
import Barra from './components/barra';
import Plan from './components/plan';
import Contenido from './components/contenido';
// import SomosLaSolicion from './components/somosLaSolucion';
import Porque from './components/porque';
import Footer from './components/footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Metodos from './components/metodos';
// import Clientes from './components/clientes';
// import Importancia from './components/importancia';
  function App() {
  return (
    <div className="App">

<Principal/>
 <Barra/>
 {/*Aqui*/}
 <Plan/>
 <Contenido/>
 <Metodos/>
 {/* <SomosLaSolicion/> */}
 {/* <Clientes/> */}
 <Porque/>
 {/* <Importancia/> */}
 <ScrollToTopButton/>
 <Footer/>
    </div>
  );
}

export default App;
