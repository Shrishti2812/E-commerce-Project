import { createContext, useEffect, useState } from "react";
import api from "../api/axios"
export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [buyNowItem, setBuyNowItem] = useState(null);
    const [wishlist, setWishlist] = useState(()=>{
     const savedWishList=localStorage.getItem("wishlist");
     return savedWishList ? JSON.parse(savedWishList) : [];   
    });
    useEffect(()=>{
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            getCartItems();
        }
    }, []);

    

  const getCartItems = async () => {
    const response = await api.get("/cart");

    console.log("CART RESPONSE:", response.data);

    setCartItems(response.data.items);
};
    const addToCart = async(product) => {
    const response = await api.post("/cart/add", { productId: product._id })
        setCartItems(response.data.items);
    }
    const wishListToggle = (product) => {
        const exists = wishlist.some((item) => item.id === product.id);
        if (exists) {
            setWishlist(prev => prev.filter((item) => item.id !== product.id));
        } else {
            setWishlist(prev => [...prev, product]);
        }
    }
    console.log(wishlist);

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