import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
function Product(){
        const {id}=useParams();
        const {user}=useContext(AuthContext);
        const navigate=useNavigate();
const [singleProduct,setSingleProduct]=useState({});
const {addToCart,wishlist,wishListToggle,setBuyNowItem}=useContext(CartContext);
const wishlisted = wishlist.some((item) => item.id === singleProduct.id);
 const roundedRating = Math.round(singleProduct.rating);
    async function fetchData() {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setSingleProduct(data);
     const roundedRating=Math.round(data.rating.rate)
   
  } catch (error) {
    console.error('Error:', error);
  }
}
 useEffect(()=>{
fetchData();
    },[]);

    return(  

       <>
 <div className=" mx-auto p-4 md:p-8 md:px-18  min-h-screen bg-[#f7f7f8] text-slate-100">
  <div className="flex flex-col md:flex-row gap-4 md:gap-18">

    <div className="relative w-full md:w-1/2 flex justify-center items-center bg-white rounded-3xl p-4">
      <button
        type="button"
        className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-gray-200"
        onClick={() => wishListToggle(singleProduct)}
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={wishlisted ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`h-5 w-5 ${wishlisted ? "text-red-500" : "text-gray-500"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21s-7.5-6.5-7.5-11.25C4.5 7.072 6.572 5 9.25 5c1.61 0 3.026.88 3.75 2.09C13.724 5.88 15.14 5 16.75 5C19.428 5 21.5 7.072 21.5 9.75C21.5 14.5 14 21 14 21H12Z"
          />
        </svg>
      </button>
      <img
        className="w-full max-w-md h-[300px] md:h-[500px] object-contain rounded-3xl"
        src={singleProduct.thumbnail}
        alt={singleProduct.title}
      />
    </div>

    <div className="flex flex-col justify-center gap-5 md:w-1/2 p-6">

  {/* CATEGORY */}
  <p className="uppercase text-xs tracking-widest text-blue-500 font-medium">
    {singleProduct.category}
  </p>

  {/* TITLE */}
  <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
    {singleProduct.title}
  </h2>

  {/* DESCRIPTION */}
  <p className="text-sm   text-gray-600 leading-relaxed">
    {singleProduct.description}
  </p>

  {/* RATING */}
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < roundedRating ? "text-amber-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ))}

    <span className="text-sm text-gray-500 ml-2">
      ({singleProduct.rating})
    </span>
  </div>

  {/* PRICE */}
  <div className= " gap-5">
    <h3 className="text-lg mb-2 font-semibold text-gray-900">
      ${singleProduct.price}
    </h3>

    <span className="text-sm px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
      {singleProduct.discountPercentage}% OFF
    </span>
  </div>

  {/* DIVIDER */}
  <div className="h-px bg-gray-200 my-2"></div>

  {/* BUTTONS */}
  <div className="flex   gap-3 md:gap-4 mt-2">

    <button
      className="px-5 py-2.5 bg-blue-600 text-white rounded-xl shadow-sm
      hover:bg-blue-500 hover:shadow-md transition-all duration-200"
      onClick={() => {
    if (!user) {
        navigate("/login");
        return;
    }

   addToCart(singleProduct);
}}
    >
      Add to Cart
    </button>
<Link to="/checkout"  >
    <button
      className="px-5 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-xl
      hover:bg-gray-100 transition"
      onClick={() => {
        setBuyNowItem(singleProduct);
       
      }}
    >
      Buy Now
    </button>
</Link>
  </div>

</div>
  </div>
</div>
       </>
 
    )
}
export default Product; 