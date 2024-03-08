import './App.css';
import Navbar from "./components/navbar/Navbar"
import About from './pages/about/About';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import ReactRouter from './reactRouter/ReactRouter';
function App() {
  return (
    <div >
      {/* <ReactRouter/> */}
      <Navbar/>
      <Home/>
      {/* <About/>
      <Products/> */}
    </div>
  );
}
export default App;