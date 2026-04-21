import { useContext, useEffect } from "react";
import { CartContext, CartProvider } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
function Cart(){
const {cartItems}=useContext(CartContext)
if(!cartItems || cartItems.length===0){
    return <div> Cart is Empty</div>
}
 const total=cartItems.reduce((acc,item)=>acc+item.price * item.quantity,0);
return(
    <>
    <h1 className="text-2xl p-2">Your cart :</h1>
    <div className="flex justify-center items-center w-full mx-auto md:p-4">
        <div className="grid grid-cols-1 mx-auto w-full px-4 md:grid-cols-3 gap-6 ">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-4"> 
                {cartItems.map((item)=>(
                    <CartItem key={item.id} item={item}/>
                ))}
            </div>
            <div className="col-span-1 flex flex-col items-center p-5 sticky gap-2">
                <p>TotalItems: {cartItems.length}</p>
                <p>Total: {total.toFixed(3)}</p>
                <p>Delivery Charge: $1</p>
                <p>Final Price: {(total + cartItems.length).toFixed(3)}</p>
                <Link to="/checkout"><button className="bg-blue-500 text-white p-2 rounded-lg mt-4">Checkout</button></Link>
            </div>
        </div>
    </div>
    </>
)
}
export default Cart;