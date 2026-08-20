import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import WishListCard from "../components/WishListCard";

function Wishlist() {

  const { wishlist } = useContext(CartContext);

  if (!wishlist || wishlist.length === 0) {
   return (
  <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 text-slate-900">
    <div className="text-center">
      <div className="w-24 h-24 mx-auto mb-5 rounded-full bg-white flex items-center justify-center shadow-sm">
        <span className="text-5xl">❤️</span>
      </div>

      <h1 className="text-3xl font-semibold text-gray-900">
        Your Wishlist is Empty
      </h1>

      <p className="mt-2 text-gray-500">
        Items you love will appear here.
      </p>
    </div>
  </div>
);
  }

  return (
    <div className="px-4 md:px-8 py-6 max-w-8xl bg-white mx-auto rounded-md shadow-sm min-h-screen text-slate-900">

      <h1 className="text-3xl font-bold mb-4">
       My Wishlist
      </h1>

      <p className="text-gray-600 mb-4">
        {wishlist.length} items in your wishlist
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

        {wishlist.map((item) => (     

           <WishListCard key={item.id} item={item} />
                 

        ))}

      </div>

    </div>
  );
}

export default Wishlist;