function CartItem({item}){
    return(
        <><div className="flex justify-between items-center ">
        <div className=" border p-4 rounded-lg mb-3">
            <div >
                <img  className="w-60 h-60 object-cover-rounded" src={item.thumbnail} alt={item.title}/>
             <h2 className="text-xl">{item.title}</h2>
<div><p>{item.description}</p></div>
<div ><h3>Price:{item.price}$</h3> <h3>Quantity:{item.quantity}</h3></div>
        </div></div>
        </div>
        </>
    )
}
export default CartItem;