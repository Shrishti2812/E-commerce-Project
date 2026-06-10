import  { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  return (
 <div className="flex gap-4 items-center p-4 border-b border-gray-200 rounded-xl bg-white hover:shadow-md transition-shadow duration-200">
  <Link to={`/product/${item.id}`} className="flex gap-4 flex-1">
    <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex justify-center items-center">
      <img
        className="w-full h-full object-contain p-2"
        src={item.thumbnail}
        alt={item.title}
      />
    </div>

    <div className="flex flex-col flex-1">
      <h2 className="text-lg font-semibold text-gray-800">
        {item.title}
      </h2>

      <p className="hidden md:block text-sm text-gray-500 mt-1">
        {item.description}
      </p>

      <div className="flex gap-4 mt-1 text-sm">
        <h3 className="font-medium text-green-600">
          ${item.price.toFixed(2)}
        </h3>

        <h3 className="text-gray-600">
          Qty: <span className="font-medium">{item.quantity}</span>
        </h3>
      </div>

      <div
        className="flex gap-2 mt-2"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <button
          onClick={() => increaseQuantity(item.id)}
          className="px-3 py-1.5 text-xs bg-gray-900 text-white rounded-md hover:bg-black transition-colors"
        >
          +
        </button>

        <button
          onClick={() => decreaseQuantity(item.id)}
          className="px-3 py-1.5 text-xs border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
        >
          −
        </button>

        <button
          onClick={() => removeFromCart(item.id)}
          className="px-3 py-1.5 text-xs text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  </Link>
</div>
  );
}
export default CartItem;