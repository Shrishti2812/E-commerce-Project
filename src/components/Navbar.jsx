import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
function Navbar(){
   const{cartItems}=useContext(CartContext);
    return(
        <>
        <nav className="flex justify-around items-center bg-gray-500 p-4 mx-auto max-w-8xl">
          {/*logo*/}
<div className="w-32 h-12" ><img src="https://pbs.twimg.com/media/EbavmWRWAAA3t7d.jpg" alt="Logo" className="text-xl text-white w-32 h-full object-cover" /> </div>
{/*search bar*/}
<div className="relative w-full flex justify-between items-center p-0.5 sm:w-80"><div className="flex justify-between items-center p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg></div>
<input className="flex-1 rounded-lg bg-white p-2 text-l" placeholder="search products" ></input></div>
<Link className="flex justify-content items-center p-1 text-white text-xl" to="/">Home</Link>
<Link className="flex justify-content items-center p-1 text-white text-xl" to="/about">About</Link>
<Link className="flex justify-content items-center p-1 text-white text-xl" to="/contact">Contact</Link>
{/*cart*/}
<Link to="/cart"><div className="flex justify-content items-center p-1 text-white text-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg> {cartItems.reduce((total,item)=>total+item.quantity,0)} 
 </div></Link>
        </nav>
        </>
    )
}
export default Navbar;