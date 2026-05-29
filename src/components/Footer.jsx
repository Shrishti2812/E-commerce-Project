import { Link } from "react-router-dom";
function Footer(){
    return (
        <>
        <div className="flex flex-col gap-4 p-1 md:p-4 bg-gray-600 text-white">

          <div className="flex flex-col gap-4 md:flex-row md:justify-around  md:text-left">
       <div>  
         <span className="font-bold text-sm sm:text-lg md:text-3xl lg:text-4xl text-white tracking-tight whitespace-nowrap">
            E-Shop</span></div>
    <div className="flex gap-4 md:gap-30 p-2">   <div className="flex flex-col gap-1 items-center">
        <h2 className="text-sm md:text-lg text-center font-semibold mt-2 text-white">Quick Links</h2>
<Link className="block text-gray-300 hover:text-white mt-1 text-sm md:text-lg" to="/">Home</Link>
<Link className="block text-gray-300 hover:text-white mt-1 text-sm md:text-lg" to="/about">About</Link>
<Link className="block text-gray-300 hover:text-white mt-1 text-sm md:text-lg" to="/contact">Contact</Link>
<Link className="block text-gray-300 hover:text-white mt-1 text-sm md:text-lg" to="/cart">Cart</Link>
       </div>
       <div className="flex flex-col gap-1 items-center">
        <h2 className="text-sm md:text-lg text-center font-semibold mt-2 text-white">Contact Us</h2>
        <p className="block text-gray-300 mt-1 text-sm md:text-lg">123 Main Streets, USA</p>
        <p className="block text-gray-300 mt-1 text-sm md:text-lg">Email: info@eshop.com</p>
       </div>
       <div className="flex flex-col gap-1 items-center">
        <h2 className="text-sm md:text-lg text-center font-medium mt-2 text-white">Category</h2>
        <p className="block text-gray-300 mt-1 text-sm md:text-lg">Electronics</p>
        <p className="block text-gray-300 mt-1 text-sm md:text-lg">Clothing</p>
        <p className="block text-gray-300 mt-1 text-sm md:text-lg">Kitchen</p>
       </div>
       </div>
        </div>
        <div className="border-t border-gray-400 mt-8 pt-4 text-center text-sm text-gray-300" >
            &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
        </div>
        </div>
        </>
    )
}
export default Footer;