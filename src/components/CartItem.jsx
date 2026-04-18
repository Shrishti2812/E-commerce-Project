import  { useContext } from "react";
import { CartContext } from "../context/CartContext";
function CartItem({item}){

    const {increaseQuantity, decreaseQuantity, removeFromCart}=useContext(CartContext);

    return(
        <div className="flex justify-between items-center p-2 border-b">      
            <div className="w-32 h-32 flex flex-shrink-0 justify-center items-center bg-gray-200">
                <img  className="w-24 h-24 object-contain rounded-lg" src={item.thumbnail} alt={item.title}/>
          </div>
<div className="flex flex-1 flex-col justify-between items-start p-4">
  <h2 className="text-lg font-semibold">{item.title}</h2>
  <p>{item.description}</p>
  <div >
    <h3 className="text-sm font-semibold">Price: ${item.price.toFixed(2)}</h3>
    <h3 className="text-sm font-semibold">Quantity: {item.quantity}</h3>
  </div>
  <button onClick={() => increaseQuantity(item.id)}>Increase</button>
  <button onClick={() => decreaseQuantity(item.id)}>Decrease</button>
  <button onClick={() => removeFromCart(item.id)}>Remove</button>
</div>

        </div>
   
    )
}
export default CartItem;