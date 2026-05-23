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
     <Link
          to={`/product/${item.id}`}
          className="cursor-pointer"
        >
    <div className="flex gap-4 p-4 border-b rounded-lg bg-white shadow-md">
 
      <div className="w-32 h-32 bg-gray-200 flex justify-center items-center">
        <img
          className="w-full h-full object-contain rounded-lg"
          src={item.thumbnail}
          alt={item.title}
        />
      </div>

      <div className="flex flex-col flex-1">

      
          <h2 className="text-lg font-semibold">
            {item.title}
          </h2>

          <p className="hidden text-sm md:block text-gray-600">
            {item.description}
          </p>

          <div className="flex gap-4">
            <h3>Price: ${item.price.toFixed(2)}</h3>
            <h3>Quantity: {item.quantity}</h3>
          </div>
        

        <div className="flex gap-2 mt-2">
          <button onClick={() => increaseQuantity(item.id)}>
            Increase
          </button>

          <button onClick={() => decreaseQuantity(item.id)}>
            Decrease
          </button>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>

      </div>

    </div>
          </Link>
  );
}
export default CartItem;