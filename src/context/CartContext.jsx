import {  createContext, useEffect, useState } from "react";

export const CartContext=createContext( );

export function CartProvider({children}){
    const [cartItems,setCartItems]=useState([]);

       useEffect(()=>{
        console.log("updated cart",cartItems)
    },[cartItems])

  const addToCart=(product)=>{
        const existingitems=cartItems.find((item)=> item.id===product.id);
    if(existingitems){
setCartItems(
    cartItems.map((item)=> 
        item.id===product.id?
    {...item,quantity:item.quantity+1} : item));
 
        }else{
setCartItems([
    ...cartItems,
    {...product,quantity:1}
]);
 }
           }  
 
    return(
    <CartContext.Provider value={{cartItems,addToCart }}>
        {children}
    </CartContext.Provider>
    )
}