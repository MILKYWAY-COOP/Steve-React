import Nav from './components/Nav';
import Products from './components/Products';
import Checkout from './components/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;