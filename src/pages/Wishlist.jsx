import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import WishListCard from "../components/WishListCard";

function Wishlist() {

  const { wishlist } = useContext(CartContext);

  if (!wishlist || wishlist.length === 0) {
    return <div>Wishlist is Empty</div>;
  }

  return (
    <div className="px-4 md:px-8 py-6">

      <h1 className="text-3xl font-bold mb-4">
       My Wishlist
      </h1>

      <p className="text-gray-600 mb-4">
        {wishlist.length} items in your wishlist
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {wishlist.map((item) => (     

           <WishListCard item={item} />
                 

        ))}

      </div>

    </div>
  );
}

export default Wishlist;