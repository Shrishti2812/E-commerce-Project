import  { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
function CartItem({ item }) {

 
    console.log("CART ITEM:", item);
    console.log("PRODUCT:", item?.product);
    console.log("PRICE:", item?.product?.price);
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart 
  } = useContext(CartContext);

  return (
 <div className="flex gap-3 items-center p-4 border-b border-gray-200 rounded-xl bg-white hover:shadow-md transition-shadow duration-200">
  <Link
    to={`/product/${item.product.id}`}
    className="flex gap-3 flex-1 min-w-0"
  >
    {/* Image */}
    <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex justify-center items-center shrink-0">
      <img
        className="w-full h-full object-contain p-2"
        src={item.product.thumbnail}
        alt={item.product.title}
      />
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 min-w-0">
      <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
        {item.product.title}
      </h2>

      <p className="hidden md:block text-sm text-gray-500 mt-1 line-clamp-2">
        {item.product.description}
      </p>

      <div className="flex flex-wrap gap-3 mt-1 text-sm">
        <h3 className="font-medium text-green-600">
          ${item.product.price.toFixed(2)}
        </h3>

        <h3 className="text-gray-600">
          Qty: <span className="font-medium">{item.quantity}</span>
        </h3>
      </div>

      <div
        className="flex flex-wrap gap-2 mt-3"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <button
          onClick={() => increaseQuantity(item.product._id,item.quantity)}
          className="px-3 py-1.5 text-xs bg-gray-900 text-white rounded-md hover:bg-black transition-colors"
        >
          +
        </button>

        <button
          onClick={() => decreaseQuantity(item.product._id,item.quantity)}
          className="px-3 py-1.5 text-xs border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
        >
          −
        </button>

        <button
          onClick={() => removeFromCart(item.product._id)}
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