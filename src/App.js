
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import CategoryPage from './pages/CategoryPage';
import ProductPge from './pages/ProductPge';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='App'>
          <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                 <Route path="/login" element={<Login/>}></Route> 
                <Route path="/signup" element={<Register/>}></Route>
                <Route path="/category" element={<CategoryPage/>}></Route> 
                <Route path="/products" element={<ProductPge/>}></Route> 
                <Route path="/cart" element={<Cart/>}></Route> 
            </Routes>
        </Router>
    </div>
  )
}

export default App;
