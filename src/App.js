import "./App.css";
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <>
        <NavBar />  
        <div className=" text-center">
        <ItemListContainer  greeting="Bienvenidos a FRANBI Indumentaria!!" />
          </div> 
    </>
  );
}

export default App;
