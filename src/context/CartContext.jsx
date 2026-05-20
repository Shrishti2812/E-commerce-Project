import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
        try {
            const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
            setCartItems(savedCart);
        } catch (error) {
            console.error("Invalid cart data in localStorage");
            setCartItems([]);
        }
    }, []);

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
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    const wishListToggle = (product) => {
        const exists = wishlist.some((item) => item.id === product.id);
        if (exists) {
            setWishlist(prev => prev.filter((item) => item.id !== product.id))
        } else {
            setWishlist(prev => [...prev, product])
        }
        const wishlisted = wishlist.some((item) => item.id === product.id);
        if (wishlisted) {
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 md:size-6 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7.5-6.5-7.5-11.25C4.5 7.072 6.572 5 9.25 5c1.61 0 3.026.88 3.75 2.09C13.724 5.88 15.14 5 16.75 5C19.428 5 21.5 7.072 21.5 9.75C21.5 14.5 14 21 14 21H12Z" />
            </svg>
        } else {
            <svg xmlns="http://www.w3.org/2000/svg" fill="red-500 stroke-red-500" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 md:size-6 text-gray-500"></svg>
        }
    }
    console.log(wishlist);

    const increaseQuantity = (id) => {
        setCartItems(prev =>
            prev.map(item => item.id == id ? { ...item, quantity: item.quantity + 1 } : item)
        )
    }

    const decreaseQuantity = (id) => {
        setCartItems(prev =>
            prev.map(item => item.id == id ? { ...item, quantity: item.quantity - 1 } : item)
        )
    }

    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }




    return (
        <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, wishlist, wishListToggle }}>
            {children}
        </CartContext.Provider>
    )
}