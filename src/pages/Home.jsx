import { useEffect, useState } from "react";
import Card from "../components/Card";

 

function Home({searchTerm}){
    const [products,setProducts]=useState([]);
 const filterItems=searchTerm?products.filter((item)=>
  item.title.toLowerCase().includes(searchTerm.toLowerCase()
  || item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )): products;
    async function fetchData() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
    console.log(data);
    setProducts(data.products);
  } catch (error) {
    console.error('Error:', error);
  }
}
 useEffect(()=>{
fetchData();
    },[]);
    return(
        <>
        <div className="mx-auto bg-blue-200 p-4">
            <h2 className="p-2 text-3xl">Product Gallery</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
  {filterItems.length > 0 ? ( 
    filterItems.map((product) => (
      <Card key={product.id} product={product} />
    ))
  ) : searchTerm ? (
    <p className="col-span-full text-center text-gray-500">
      No products found
    </p>
  ) : (
    <p className="col-span-full text-center text-gray-500">
      Loading...
    </p>
  )}
</div>
        </div>
        </>
    )
}
export default Home;