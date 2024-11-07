import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"


function App() {
  
  return (
    <>
    <h1> Danny-Ecommerce</h1>
    <NavBar/>
    <hr></hr>
    <ItemListContainer greeting="Bienvenido a Tienda Danny " ></ItemListContainer>
    </>
  )
}

export default App
