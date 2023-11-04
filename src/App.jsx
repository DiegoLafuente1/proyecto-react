import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/navbar/NavBar';
import ItemListContainer from './componentes/items/ItemListContainer';
import ItemList from './componentes/ItemList/ItemList';
import Item from './componentes/Item/Item';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './componentes/ItemCount/ItemCount';
import Footer from './componentes/Footer/Footer'





function App() {
  return (
      <>
      <NavBar />
      <ItemListContainer />
      <Item/>
      <ItemDetailContainer/>
      <ItemCount/>
      <Footer/>
      </>
  )
}

export default App
