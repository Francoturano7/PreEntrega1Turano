import "./App.css";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartView from "./components/CartView/CartView";
import ThankYou from "./components/ThankYou/ThankYou";
function App() {
  return (
    <CartContextProvider>

    <BrowserRouter>
    <div className="body">
    <div className=" text-center fondo-violeta">
      <NavBar />  
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:idCategory" element={<ItemListContainer greeting="Bienvenidos a Bati Indumentaria!!"/>} />

      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<CartView/>}/>
      <Route path="/thankyou/:idOrder" element={<ThankYou/>}/>

      <Route path="*" element={<h1>Error 404: Esta pagina no existe</h1>}/>

    </Routes>
    </div>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
