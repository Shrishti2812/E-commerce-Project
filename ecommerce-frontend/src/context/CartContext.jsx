import { createContext, useEffect, useState } from "react";
import api from "../api/axios"
export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [buyNowItem, setBuyNowItem] = useState(null);
const [wishlist, setWishlist] = useState([]);
    useEffect(()=>{
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            getCartItems();
             getWishListItems();
        }
    }, []);

    const getWishListItems=async ()=>{
        const response=await api.get("/wishlist");

    console.log("WISHLIST RESPONSE:", response.data);
        setWishlist(response.data.products);
    
    }

     
  const getCartItems = async () => {
    const response = await api.get("/cart");
 
    setCartItems(response.data.items);
};
    const addToCart = async(product) => {
    const response = await api.post("/cart/add", { productId: product._id })
        setCartItems(response.data.items);
    }
   const wishListToggle = async (product) => {
    const exists = wishlist.some(
        item => item._id === product._id
    );

    if (exists) {
        const response = await api.delete("/wishlist/remove", {
            data: { productId: product._id }
        });

        setWishlist(response.data.products);
    } else {
        const response = await api.post("/wishlist/add", {
            productId: product._id
        });

        setWishlist(response.data.products);
    }
};

    const increaseQuantity = async (id,quantity) => {
        const newquantity=quantity+1;
        const response=await api.patch(`/cart/update/${id}`,{quantity:newquantity});
        setCartItems(response.data.items);
    }

    const decreaseQuantity = async (id, quantity) => {

    if (quantity === 1) {
        const response = await api.delete(`/cart/remove/${id}`);
        setCartItems(response.data.items);
        return;
    }

    const newquantity = quantity - 1;

    const response = await api.patch(
        `/cart/update/${id}`,
        { quantity: newquantity }
    );

    setCartItems(response.data.items);
};
 

    const removeFromCart = async (id) => {
       const response=await api.delete(`/cart/remove/${id}`);
       setCartItems(response.data.items);
    }




    return (
        <CartContext.Provider value={{ cartItems, getCartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, 
        wishlist, wishListToggle, buyNowItem, setBuyNowItem }}>
            {children}
        </CartContext.Provider>
    )
}