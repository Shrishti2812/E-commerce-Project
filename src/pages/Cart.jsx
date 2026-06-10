import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
function Cart(){
const {cartItems}=useContext(CartContext);
const {setBuyNowItem}=useContext(CartContext);
if(!cartItems || cartItems.length===0){ 
  return (
  <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 text-slate-900 ">
    <div className="text-center">
      <div className="text-7xl mb-4">🛒</div>

      <h1 className="text-3xl font-semibold text-gray-900">
        Cart is Empty
      </h1>

      <p className="mt-2 text-gray-500">
        Your cart has no items yet.
      </p>
    </div>
  </div>
);
}
 const total=cartItems.reduce((acc,item)=>acc+item.price * item.quantity,0);
 
return(
    <>
    <div className="min-h-screen bg-gray-100 text-slate-900">
    <h1 className="text-2xl p-2">Your cart :</h1>
    <div className="flex justify-center items-center w-full mx-auto md:p-4">
        <div className="grid grid-cols-1 mx-auto w-full px-4 md:grid-cols-3 gap-6 ">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-4"> 
                {cartItems.map((item)=>(
                    <CartItem key={item.id} item={item}/>
                ))}
            </div>
         <div className="col-span-1 md:sticky md:top-5 h-fit rounded-2xl mb-4 bg-white shadow-lg border-b border-t border-gray-300 p-6">
  
  {/* Heading */}
  <h2 className="text-2xl font-bold pb-4">
    Order Summary
  </h2>

  {/* Price Details */}
  <div className="flex flex-col gap-3 py-4 text-gray-700">
    
    <div className="flex justify-between">
      <span>Items</span>
      <span>{cartItems.length}</span>
    </div>

    <div className="flex justify-between">
      <span>Subtotal</span>
      <span>${total.toFixed(2)}</span>
    </div>

    <div className="flex justify-between">
      <span>Delivery</span>
      <span>$1.00</span>
    </div>

    {/* Divider */}
    <div className="border-t pt-3 flex justify-between text-lg font-semibold text-black">
      <span>Total</span>
      <span>${(total + 1).toFixed(2)}</span>
    </div>
  </div>

  {/* Checkout Button */}
  <Link to="/checkout" className="block mt-4">
    <button 
    onClick={() => {
      setBuyNowItem(null);
    }} 
     className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-3 rounded-xl">
      Proceed to Checkout
    </button>
  </Link>

</div>
        </div>
    </div>
    </div>
    </>
)
}
export default Cart;