import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import Wishlist from "./pages/Wishlist";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
      />

      <Routes>

        {/* PUBLIC ROUTES */}

        <Route
          path="/"
          element={
            <Home
              searchTerm={searchTerm}
              category={category}
              setCategory={setCategory}
            />
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/product/:id" element={<Product />} />


        {/* PROTECTED ROUTES */}

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;