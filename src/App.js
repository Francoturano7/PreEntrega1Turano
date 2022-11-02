import "./App.css";
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <>
        <NavBar/>   
        <ItemListContainer greeting="BIENVENIDOS!" />
    </>
  );
}

export default App;
