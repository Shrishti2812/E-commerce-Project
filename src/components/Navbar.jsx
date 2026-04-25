import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
function Navbar(){
   const{cartItems}=useContext(CartContext);
   const [isOpen,setIsOpen]=useState(false);
       return(
        <>
        <nav className="flex justify-around items-center bg-gray-500 p-4 mx-auto w-full">
         
          {/*logo*/}
<div className="flex items-center min-w-0 flex-shrink-0">
  <span className="font-bold text-sm sm:text-lg md:text-3xl lg:text-4xl text-white tracking-tight whitespace-nowrap">E-Shop</span>
</div>
{/*search bar*/}
<div className="flex flex-1 min-w-0 max-w-xs sm:max-w-sm md:max-w-md mx-2 md:mx-4 items-center bg-white rounded-lg">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-5 ml-1 md:ml-2 text-gray-500 flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
  <input className="flex-1 min-w-0 p-1.5 md:p-2.5 text-sm rounded-lg outline-none text-black" placeholder="search" />
</div>
<div className="hidden md:flex md:justify-between md:items-center gap-4 lg:gap-10">
<Link className="flex justify-content items-center p-1 text-white text-base md:text-xl" to="/">Home</Link>
<Link className="flex justify-content items-center p-1 text-white text-base md:text-xl" to="/about">About</Link>
<Link className="flex justify-content items-center p-1 text-white text-base md:text-xl" to="/contact">Contact</Link>
{/*cart*/}
<Link to="/cart"><div className="flex justify-content items-center p-1 text-white text-base md:text-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 md:size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg> {cartItems.reduce((total,item)=>total+item.quantity,0)} 
 </div></Link>
 </div>
 <div className="md:hidden flex items-center gap-2">
  <Link to="/cart" className="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
    <span className="text-white text-xs ml-1">{cartItems.reduce((total,item)=>total+item.quantity,0)}</span>
  </Link>
  <button onClick={()=>setIsOpen(!isOpen)}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.633h16.5M3.75 12h16.5m-16.5 5.367h16.5" />
</svg>
  </button>
  </div>
 
        </nav>
        {/* Mobile menu - drops down below navbar as separate layer */}
        {isOpen && (
<div className="md:hidden w-full bg-gray-600 px-4 py-4 flex justify-around items-center">
  <Link className="text-white text-base" to="/">Home</Link>
  <Link className="text-white text-base" to="/about">About</Link>
  <Link className="text-white text-base" to="/contact">Contact</Link>
  <Link to="/cart"><div className="flex items-center text-white text-base"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg> {cartItems.reduce((total,item)=>total+item.quantity,0)} 
 </div></Link>
</div>
  )}
 
        </>
    )
}
export default Navbar;