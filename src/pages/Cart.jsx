import { useContext, useEffect } from "react";
import { CartContext, CartProvider } from "../context/CartContext";
import CartItem from "../components/CartItem";
function Cart(){
const {cartItems}=useContext(CartContext)
if(!cartItems || cartItems.length ===0){
    return <div> Cart is Empty</div>
}
 const total=cartItems.reduce((acc,item)=>acc+item.price * item.quantity,0);
return(
    <>                                                                                         
    <h1 className="text-2xl p-2">Your cart :</h1>
<div  className="flex justify-content items-center">
    <div>
    {cartItems.map((item)=>(
    <CartItem key={item.id} item={item}/>
)
)}</div>
<div>
    TotalItems: {cartItems.length};
    Total : {total.toFixed(3)}
    Delivery Charge: {"$1"}
    Final Price: {(total+cartItems.length).toFixed(3)};
 
    
</div>
 </div>
 
    </>
)
}
export default Cart;