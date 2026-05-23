import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
function WishListCard({ item }) {
  const {addToCart}=useContext(CartContext);
  const {wishListToggle,wishlist}=useContext(CartContext);
 const wishlisted = wishlist.some((product) => product.id === item.id);
  return (
    <div className="bg-white shadow-md overflow-hidden hover:shadow-xl transition rounded-lg">
      <Link to={`/product/${item.id}`} className="cursor-pointer">
      {/* Image Section */}
<div className="relative w-full h-56 bg-gray-200 flex items-center justify-center">
  <img
    className="w-full h-full object-contain"
    src={item.thumbnail}
    alt={item.title}
  />

  {/* Heart Icon */}
  <button
    className="absolute top-2 right-2 z-10  "
    onClick={(e) => {
      e.preventDefault(); // prevents Link navigation
      wishListToggle(item);
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={wishlisted ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`size-5 md:size-6 ${
        wishlisted ? "text-red-500" : "text-gray-500"
      }`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-7.5-6.5-7.5-11.25C4.5 7.072 6.572 5 9.25 5c1.61 0 3.026.88 3.75 2.09C13.724 5.88 15.14 5 16.75 5C19.428 5 21.5 7.072 21.5 9.75C21.5 14.5 14 21 14 21H12Z"
      />
    </svg>
  </button>
</div>
      

      {/* Content Section */}
      <div className="p-4 flex flex-col items-center text-center">
        
        <h2 className="flex items-center justify-center text-lg font-semibold line-clamp-2 h-14">
          {item.title}
        </h2>

        <p className="text-gray-600 mt-2 text-sm line-clamp-3">
          {item.description}
        </p>

        <p className="text-xl font-bold text-green-600 mt-4">
          ${item.price.toFixed(2)}
        </p>
        </div>
</Link>
        <div className="w-full flex justify-center">
        <button 
          className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
</div>
 
 </div>
  );
}

export default WishListCard;