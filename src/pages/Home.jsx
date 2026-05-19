import { useEffect, useState } from "react";
import Card from "../components/Card";

 

function Home({searchTerm, category, setCategory}){
    const [products,setProducts]=useState([]);
    const [sortOption, setSortOption] = useState("");
     const Categories=["all",...new Set(products.map((item)=>item.category ))];
 
 const filterItems= products.filter((item)=>{
const search =searchTerm.trim().toLowerCase()||" ";
  const matchSearch=item.title.toLowerCase().includes(search.toLowerCase())
  || item.description.toLowerCase().includes(search.toLowerCase())  

  const matchCategory=category==="all"|| item.category ===category ;
 
  return matchSearch && matchCategory  ;
});
  
  const sortedItems=[...filterItems].sort((a,b)=>{
    if(sortOption==="Low-High"){
      return a.price-b.price;
    }
    else if(sortOption==="High-Low"){
      return b.price-a.price;
    }else if(sortOption==="A-Z"){
      return a.title.localeCompare(b.title);
    }else if(sortOption==="Z-A"){
      return b.title.localeCompare(a.title);
    }
      return 0;
  }
  )
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
        <> <div className="flex flex-wrap justify-around gap-2 bg-gray-400 p-2 rounded-md overflow-x-auto 
        whitespace-nowrap py-3">
           { Categories.map(category => (
            <button className="text-white text-sm md:text-lg" key={category} onClick={()=>setCategory(category)}>
              {category}
            </button>
           ))}
          </div>
        <div className="mx-auto bg-blue-200 p-4">
         <div className="flex justify-between items-center mb-6">
                      <h2 className="p-2 text-3xl">Product Gallery</h2>
                      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="p-2 border rounded-md">
                        <option>Sort By</option>
                        <option>Low-High</option>
                        <option>High-Low</option>
                        <option>A-Z</option>
                        <option>Z-A</option>
                      </select>
                      </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
  {sortedItems.length > 0 ? ( 
    sortedItems.map((product) => (
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