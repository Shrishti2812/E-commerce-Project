import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function Wishlist() {
  const {wishlist}=useContext(CartContext);
   if(!wishlist|| wishlist.length===0){
    return <div> Wishlist is Empty</div>
}
  return (
    <>
    <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
    <div className="flex justify-center items-center w-full mx-auto md:p-4">
        <div className="grid grid-cols-1 mx-auto w-full px-4 md:grid-cols-3 gap-6 ">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-4"> 
                {wishlist.map((item)=>(
                    <div key={item.id} >
                      <img src={item.thumbnail} alt={item.title}  />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>${item.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
            </div>
            </div>
            </>
  );
}
export default Wishlist;