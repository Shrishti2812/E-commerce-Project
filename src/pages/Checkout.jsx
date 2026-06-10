import{Link} from "react-router-dom";
        import { useContext } from "react";
        import { CartContext } from "../context/CartContext";
        import CartItem from "../components/CartItem";
function Checkout(){

    const {cartItems, buyNowItem}=useContext(CartContext);
    const checkoutItems=buyNowItem ? [buyNowItem] : cartItems;
    const total=checkoutItems.reduce((acc,item)=>acc+item.price * (item.quantity||1),0);
    return (
        <>
       <div className="min-h-screen bg-gray-100 text-slate-900 ">
  <div className="flex  flex-col md:flex-row gap-10 max-w-6xl mx-auto p-6 text-slate-900">

    {/* Checkout Form */}
    <form className="w-full md:w-1/2 p-8 rounded-xl bg-white border border-gray-200 text-slate-900">

      <h2 className="text-2xl font-semibold mb-6 text-slate-900">
        Shipping Details
      </h2>

      <label className="block text-gray-700 font-medium mb-2">
        Full Name
      </label>
      <input type="text" placeholder="Full Name"
        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black mb-4"
      />

      <label className="block text-gray-700 font-medium mb-2">Email Address</label>
      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black mb-4"
      />
 
      <label className="block text-gray-700 font-medium mb-2">Shipping Address</label>
      <input   type="text"       placeholder="Shipping Address"
        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black mb-4"
      />

      <label className="block text-gray-700 font-medium mb-2">City   </label>
      <input   type="text"     placeholder="City"
        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black mb-4"
 />
 
      <label className="block text-gray-700 font-medium mb-2">  Postal Code    </label>
      <input      type="text"   placeholder="Postal Code"
        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black mb-4"
      />

   
 <h3 className="text-xl font-semibold mb-4 text-slate-900">Payment Method</h3>

      <div className="flex justify-between mb-6">
        <label className="flex items-center gap-3">
          <input type="radio" name="payment" className="form-radio text-black" />
          <span className="text-gray-700">Credit/Debit Card</span>
        </label>
        <label className="flex items-center gap-3">
          <input type="radio" name="payment" className="form-radio text-black" />
          <span className="text-gray-700">UPI</span>
        </label>
        <label className="flex items-center gap-3">
          <input type="radio" name="payment" className="form-radio text-black" />
          <span className="text-gray-700">Cash on Delivery</span>
        </label>
      </div>
    </form>

    {/* Cart Section */}
   <div className="w-full md:w-[40%] bg-white rounded-2xl border border-gray-200 p-4 space-y-6 text-slate-900">
  <h2 className="text-2xl font-bold text-slate-900">Order Summary</h2>
 
  {/* Cart Items */}
<div className="border border-gray-200 rounded-xl p-4 text-slate-900">
    <h3 className="text-lg font-semibold mb-2 text-slate-900">
      Cart Items ({checkoutItems.length})
    </h3>

    <div className="max-h-[250px] overflow-y-auto space-y-3">
      {checkoutItems.map((item) => (
        <div
          key={item.id}
          className="flex gap-4 p-3 border border-gray-100 rounded-lg"
        >
          <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1">
            <h4 className="font-medium text-gray-900 line-clamp-2">
              {item.title}
            </h4>

            <div className="mt-2 text-sm text-gray-600 space-y-1">
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Qty: {item.quantity}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
{/* Pricing Summary */}
  <div className="border border-gray-200 rounded-xl p-3 bg-gray-50 space-y-3">
    <div className="flex justify-between text-gray-600">
      <span>Items</span>
      <span>{checkoutItems.length}</span>
    </div>

    <div className="flex justify-between text-gray-600">
      <span>Subtotal</span>
      <span>${total.toFixed(2)}</span>
    </div>

    <div className="flex justify-between text-gray-600">
      <span>Delivery</span>
      <span>$1.00</span>
    </div>

    <div className="border-t pt-3 flex justify-between text-lg font-bold">
      <span>Total</span>
      <span>${(total + 1).toFixed(2)}</span>
    </div>
  </div>
 <button className="w-full bg-black text-white py-2 rounded-lg text-xl font-semibold hover:bg-gray-800 transition">
    Place Order
  </button>
</div>
</div>
</div>
 
        </>
    )
}
export default Checkout;