import {  createContext, useEffect, useState } from "react";

export const CartContext=createContext( );

export function CartProvider({children}){
    const [cartItems,setCartItems]=useState([]);

   useEffect(() => {
    try {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(savedCart);
    } catch (error) {
        console.error("Invalid cart data in localStorage");
        setCartItems([]);
    }
}, []);

  const addToCart=(product)=>{
        const existingitems=cartItems.find((item)=> item.id===product.id);
        let updatedCart;
    if(existingitems){ 
   updatedCart= cartItems.map((item)=> 
        item.id===product.id?
    {...item,quantity:item.quantity+1} : item);
 
        }else{
 updatedCart=[
    ...cartItems,
    {...product,quantity:1}
];
 }
 setCartItems(updatedCart);
 localStorage.setItem("cart",JSON.stringify(updatedCart));
}

 const increaseQuantity=(id)=>{
    setCartItems(prev=>
       prev.map(item=> item.id==id?{...item,quantity:item.quantity+1}:item)
    )
    }

  const decreaseQuantity=(id)=>{
    setCartItems(prev=>
        prev.map(item=> item.id==id?{...item,quantity:item.quantity-1}:item)
    )
}

const removeFromCart=(id)=>{
      const updatedCart=cartItems.filter(item=> item.id!==id);
      setCartItems(updatedCart);
      localStorage.setItem("cart",JSON.stringify(updatedCart));
}


          
 
    return(
    <CartContext.Provider value={{cartItems,addToCart,increaseQuantity,decreaseQuantity,removeFromCart  }}>
        {children}
    </CartContext.Provider>
    )
}