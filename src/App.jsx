import { useState } from 'react'
 import Home from './pages/Home'
import Navbar from './components/Navbar'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cart from './pages/Cart'
import Contact from './pages/Contact';
import About from './pages/About';
import Checkout from './pages/Checkout';
function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/checkout' element={<Checkout/>}/>
    </Routes>

 </>
  )
}

export default App
