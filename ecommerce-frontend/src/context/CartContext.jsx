import { createContext, useEffect, useState } from "react";

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
        try {
            const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
            setCartItems(savedCart);
        } catch (error) {
            console.error("Invalid cart data in localStorage");
            setCartItems([]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        const existingitems = cartItems.find((item) => item.id === product.id);
        let updatedCart;
        if (existingitems) {
            updatedCart = cartItems.map((item) =>
                item.id === product.id ?
                    { ...item, quantity: item.quantity + 1 } : item);
        } else {
            updatedCart = [
                ...cartItems,
                { ...product, quantity: 1 }
            ];
        }
        setCartItems(updatedCart);
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

    const increaseQuantity = (id) => {
        
        setCartItems(prev =>
            prev.map(item => item.id == id ? { ...item, quantity: item.quantity + 1 } : item)
        )
    }

    const decreaseQuantity = (id) => {
        const item = cartItems.find(item => item.id === id);
        if (item && item.quantity > 1) {
            setCartItems(prev =>
                prev.map(item => item.id == id ? { ...item, quantity: item.quantity - 1 } : item)
            );
        } else {

        removeFromCart(id);
    }
    }

    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
    }




    return (
        <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, 
        wishlist, wishListToggle, buyNowItem, setBuyNowItem }}>
            {children}
        </CartContext.Provider>
    )
}