import { useState } from 'react'
 import Home from './pages/Home'
import Navbar from './components/Navbar'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cart from './pages/Cart'
import Contact from './pages/Contact';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Product from './pages/Product';
import Wishlist from './pages/Wishlist';
function App() {
 
const [searchTerm,setSearchTerm]=useState("");
const [category,setCategory]=useState("all");
  
  return (
    <>
    <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} category={category} setCategory={setCategory}/>
    <Routes>
<Route path='/' element={<Home searchTerm={searchTerm} category={category} setCategory={setCategory} />}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/product/:id' element={<Product/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/wishlist' element={<Wishlist/>}/>
<Route path='/checkout' element={<Checkout/>}/>
    </Routes>

 </>
  )
}

export default App
