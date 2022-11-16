import "./App.css";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="body">
    <div className=" text-center fondo-violeta">
      <NavBar />  
    <Routes>
      <Route path="/" element={<ItemListContainer greeting="Bienvenidos a FRANBI Indumentaria!!"/>} />
      <Route path="/category/:idCategory" element={<ItemListContainer greeting="Bienvenidos a FRANBI Indumentaria!!"/>} />

      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="*" element={<h1>Error 404: Esta pagina no existe</h1>}/>

    </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
