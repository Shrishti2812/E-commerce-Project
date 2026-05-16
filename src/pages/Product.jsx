import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
function Product(){
        const {id}=useParams();
const [singleProduct,setSingleProduct]=useState({});
 const roundedRating = Math.round(singleProduct.rating);
    async function fetchData() {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setSingleProduct(data);
     const roundedRating=Math.round(data.rating.rate)
   
  } catch (error) {
    console.error('Error:', error);
  }
}
 useEffect(()=>{
fetchData();
    },[]);

    return(  

       <>
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 p-3 flex justify-center items-center">
            <img  className="w-full max-w-md h-[300px] md:h-[500px] object-contain rounded-lg"
 src={singleProduct.thumbnail} alt={singleProduct.title}  />
          </div>
            <div className="flex flex-col justify-center gap-4 md:w-1/2 p-6">
            <p className="uppercase text-sm text-gray-500">{singleProduct.category}</p>
  <h2 className="text-2xl md:text-4xl font-bold">{singleProduct.title}</h2>
  <p className=" text-lg hidden md:block">{singleProduct.description}</p>
  <div className="flex items-center gap-1">
  {[...Array(5)].map((_, index) => (
    <span
      key={index}
      className={
        index < roundedRating
          ? "text-yellow-400"
          : "text-gray-300"
      }
    >
      ★
    </span>
  ))}

  <span className="text-sm text-gray-500">
    ({singleProduct.rating})
  </span>
</div>
    <h3 className="text-sm font-semibold">Price: ${singleProduct.price}</h3>
    <span className="text-gray-600 leading-relaxed">{singleProduct.discountPercentage}% off</span>
    <div className="flex gap-4 mt-4">
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Add to Cart</button>
      <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition">Buy Now</button>
    </div>
  
  </div>
        
          </div>
      </div>
       </>
 
    )
}
export default Product; 