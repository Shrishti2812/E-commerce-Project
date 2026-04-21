import  { useContext } from "react";
import { CartContext } from "../context/CartContext";
function CartItem({item}){

    const {increaseQuantity, decreaseQuantity, removeFromCart}=useContext(CartContext);

    return(
        <div className="flex justify-between items-center gap-2 md:gap-4 p-2 md:p-4 border-b w-full px-4 overflow-hidden rounded-lg bg-white shadow-md">
          <div className="w-20 h-20 md:w-32 md:h-32 flex-shrink-0 md:flex-shrink flex justify-center items-center bg-gray-200">
            <img  className="w-full h-full object-contain rounded-lg" src={item.thumbnail} alt={item.title}/>
          </div>
<div className="flex-1 flex flex-col justify-between items-start md:p-2 min-w-0 w-full">
  <h2 className="text-sm md:text-lg font-semibold truncate overflow-hidden">{item.title}</h2>
  <p className=" text-sm hidden md:block">{item.description}</p>
  <div className="flex gap-4  ">
    <h3 className="text-sm font-semibold">Price: ${item.price.toFixed(2)}</h3>
    <h3 className="text-sm font-semibold">Quantity: {item.quantity}</h3>
  </div>
  <div className="flex items-center gap-2 py-1 text-sm  ">
    <button onClick={() => increaseQuantity(item.id)}>Increase</button>
  <button onClick={() => decreaseQuantity(item.id)}>Decrease</button>
  <button onClick={() => removeFromCart(item.id)}>Remove</button>
  </div>
</div>

        </div>
    
    )
}
export default CartItem;