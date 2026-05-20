import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
function Card({ product }){
 const {addToCart}=useContext(CartContext);
 const {wishListToggle,wishlist}=useContext(CartContext);
 const wishlisted = wishlist.some((item) => item.id === product.id);


    return(
        <>
   
        <div className="bg-white border rounded-xl shadow m-2 p-2">
                 <Link to={`/product/${product.id}`}>
            <div className="w-full h-48 overflow-hidden bg-blue-100 rounded-md"><img src={product.thumbnail} alt={product.title} 
            className="  w-full h-full" /></div>
            <div className="mt-2 text-xl text-center font-medium line-clamp-2"><h3>{product.title}</h3></div>
             <div className="mt-2 text-sm text-center font-medium line-clamp-2"><h3>{product.description}</h3></div>
            <div className="flex justify-center items-center mt-1">
                <h4 className="text-lg font-semibold">${product.price}</h4> 
            </div>
            </Link>
            <div className="flex justify-center items-center"><button onClick={()=>addToCart(product)} className="p-1 mt-2 bg-black text-white py-1 rounded-md">Add to Cart</button></div>
         <div > 
            <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={wishlisted ? "currentColor" : "none"}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={`size-5 md:size-6 ${
        wishlisted ? "text-red-500" : "text-gray-500"
    }`}
    onClick={() => wishListToggle(product)}
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-7.5-6.5-7.5-11.25C4.5 7.072 6.572 5 9.25 5c1.61 0 3.026.88 3.75 2.09C13.724 5.88 15.14 5 16.75 5C19.428 5 21.5 7.072 21.5 9.75C21.5 14.5 14 21 14 21H12Z"
    />
</svg>
            
         
          </div> 
          </div> 
       
        </>
    )
}
export default Card; 