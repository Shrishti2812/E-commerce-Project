import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
function Card({ product }){
 const {addToCart}=useContext(CartContext);
 const {wishListToggle,wishlist}=useContext(CartContext);
 const wishlisted = wishlist.some((item) => item.id === product.id);
 const {user}=useContext(AuthContext);
const navigate=useNavigate();
    return(
        <>
   
        <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl
         transition rounded-lg text-slate-900 hover:-translate-y-1 transition-all duration-300">
  <Link to={`/product/${product.id}`}>
    
    {/* Image */}
    <div className="relative bg-gray-300 p-2">
      <div className="h-28 md:h-38 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Wishlist */}
      <button
        className="absolute top-3 right-3 flex items-center justify-center h-9 w-9 rounded-full bg-white shadow-sm border border-gray-200"
            onClick={(e) => {
    e.preventDefault();

    if (!user) {
        navigate("/login");
        return;
    }

    wishListToggle(product);
}}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={wishlisted ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`h-5 w-5 ${
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

    {/* Content */}
    <div className="p-2">
      <h3 className="font-medium text-gray-900  h-12 overflow-hidden text-sm md:text-base">
        {product.title}
      </h3>

      <div className="mt-1 flex items-center justify-between">
        <span className="text-md font-bold text-gray-900">
          ${product.price}
        </span>

        <span className="text-sm text-gray-500">
          View →
        </span>
      </div>
    </div>
  </Link>

  {/* Footer */}
  <div className="px-2  ">
    <button
       onClick={() => {
    if (!user) {
        navigate("/login");
        return;
    }

    addToCart(product) ;
}}
      className="w-full rounded-xl bg-black py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
    >
      Add to Cart
    </button>
  </div>
</div>
        </>
    )
}
export default Card; 