import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
 const App = () => {
  return (
  <div style={{width: '100vw', height: '100vh'}}>
    <NavBar/>
    <ItemListContainer />
  </div>
  )
}
export default App; 