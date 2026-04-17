import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Card({ product }){
 const {addToCart}=useContext(CartContext);
    return(
        <>
        <div className="bg-white border rounded-xl shadow m-2 p-2">
            <div className="w-full h-48 overflow-hidden bg-blue-100 rounded-md"><img src={product.thumbnail} alt={product.title} 
            className="  w-full h-full" /></div>
            <div className="mt-2 text-xl text-center font-medium line-clamp-2"><h3>{product.title}</h3></div>
             <div className="mt-2 text-sm text-center font-medium line-clamp-2"><h3>{product.description}</h3></div>
            <div className="flex justify-center items-center mt-1"><h4 className="text-lg font-semibold">${product.price}</h4>
            </div> <div className="flex justify-center items-center"><button onClick={()=>addToCart(product)} className="p-1 mt-2 bg-black text-white py-1 rounded-md">Add to Cart</button></div>
           
        </div>
        
        </>
    )
}
export default Card;