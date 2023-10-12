import './App.css';
import Titulo from './componentes/Titulo/titulo';
import NavBar from './componentes/navbar/NavBar.jsx';
import Card from './componentes/card/card';

function App() {
  return (
    <>
      <NavBar/>
      <Titulo tituloApp="Tienda de Zapatillas" subTituloApp="Encontra lo que queres."/>
      <Titulo tituloApp="Modelos de zapatillas" subTituloApp="Eleji las zapatillas."/>
      <Card/>
    </>
  )
}

export default App
