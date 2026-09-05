import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Navbar({ searchTerm, setSearchTerm }) {
  const { cartItems } = useContext(CartContext);
  const { logout, user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <nav
        className="flex justify-around items-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 
        p-3 mx-auto w-full sticky top-0 z-20 shadow-md border-b border-gray-600"
      >

        {/* Logo */}
        <div className="flex items-center min-w-0 flex-shrink-0">
          <span
            className="font-extrabold text-sm sm:text-lg md:text-3xl lg:text-3xl 
            text-white tracking-wide whitespace-nowrap hover:text-blue-300 transition-colors duration-200"
          >
            ShopSphere
          </span>
        </div>


        {/* Search Bar */}
        <div
          className="flex flex-1 min-w-0 max-w-xs sm:max-w-sm md:max-w-md mx-2 md:mx-2 
          items-center bg-white/95 backdrop-blur-md rounded-full shadow-sm 
          focus-within:ring-2 focus-within:ring-blue-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 md:size-5 ml-2 text-gray-500 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            className="flex-1 min-w-0 p-1.5 md:p-2 text-sm rounded-full outline-none text-black bg-transparent"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center gap-5 lg:gap-8">

          {/* Home */}
          <Link
            className="text-white text-base md:text-lg hover:text-blue-300 transition"
            to="/"
          >
            Home
          </Link>


          {/* About */}
          <Link
            className="text-white text-base md:text-lg hover:text-blue-300 transition"
            to="/about"
          >
            About
          </Link>


          {/* Contact */}
          <Link
            className="text-white text-base md:text-lg hover:text-blue-300 transition"
            to="/contact"
          >
            Contact
          </Link>


          {/* My Orders */}
          <Link
            to="/order"
            className="text-white text-center text-base hover:text-blue-300 transition"
          >
            My Orders
          </Link>


          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="text-white hover:text-red-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 md:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21s-7.5-6.5-7.5-11.25C4.5 7.072 6.572 5 9.25 5c1.61 0 3.026.88 3.75 2.09C13.724 5.88 15.14 5 16.75 5C19.428 5 21.5 7.072 21.5 9.75C21.5 14.5 14 21 14 21H12Z"
              />
            </svg>
          </Link>


          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-1 text-white hover:text-green-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 md:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1-1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 1 1-1.5 0Z"
              />
            </svg>

            <span className="text-sm font-medium">
              {cartCount}
            </span>
          </Link>


           
          {user ? (
  <button
    onClick={logout}
    title="Logout"
    className="text-white hover:text-red-300 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-5 md:size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3-3H9m0 0 3-3m-3 3 3 3"
      />
    </svg>
  </button>
) : (
  <Link
    to="/login"
    className="text-white text-base hover:text-blue-300 transition"
  >
    Login
  </Link>
)}
        </div>


        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-3">

          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-1 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1-1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 1 1-1.5 0Z"
              />
            </svg>

            <span className="text-xs">
              {cartCount}
            </span>
          </Link>


          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-md hover:bg-white/10 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.633h16.5M3.75 12h16.5m-16.5 5.367h16.5"
              />
            </svg>
          </button>

        </div>
      </nav>


      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="md:hidden w-full bg-gray-800/95 backdrop-blur-md  
          px-6 py-5 grid grid-cols-2 text-center gap-4 shadow-xl border-t border-gray-600 
          animate-fadeIn sticky top-14 z-10"
        >

          {/* Home */}
          <Link
            className="text-white text-center text-base hover:text-blue-300 transition"
            to="/"
          >
            Home
          </Link>


          {/* About */}
          <Link
            className="text-white text-center text-base hover:text-blue-300 transition"
            to="/about"
          >
            About
          </Link>


          {/* Contact */}
          <Link
            className="text-white text-center text-base hover:text-blue-300 transition"
            to="/contact"
          >
            Contact
          </Link>


          {/* My Orders */}
          <Link
            to="/order"
            className="text-white text-center text-base hover:text-blue-300 transition"
          >
            My Orders
          </Link>


          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="text-white text-center text-base hover:text-red-300 transition"
          >
            Wishlist
          </Link>


   {user ? (
  <button
    onClick={() => {
      logout();
      setIsOpen(false);
    }}
    className="text-white text-center text-base hover:text-red-300 transition"
  >
    Logout
  </button>
) : (
  <Link
    to="/login"
    onClick={() => setIsOpen(false)}
    className="text-white text-center text-base hover:text-blue-300 transition"
  >
    Login
  </Link>
)}
        </div>
      )}
    </>
  );
}

export default Navbar;