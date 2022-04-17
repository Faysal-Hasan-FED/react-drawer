import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Message from './pages/Message';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Reports from './pages/Reports';
import Support from './pages/Support';
import Team from './pages/Team';

function App() {
  return (
    <>
    <BrowserRouter>
    <Sidebar></Sidebar>
    <Routes>
      <Route path="" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/products" element={<Product></Product>}></Route>
      <Route path="/team" element={<Team></Team>}></Route>
      <Route path="/reports" element={<Reports></Reports>}></Route>
      <Route path="/message" element={<Message></Message>}></Route>
      <Route path="/support" element={<Support></Support>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
