import { HashRouter } from 'react-router-dom';
import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <>
    <BrowserRouter>
    <Sidebar></Sidebar>
    <HashRouter>
      <Route path="" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/products" element={<Product></Product>}></Route>
    </HashRouter>
    </BrowserRouter>
    
    </>
  );
}

export default App;
