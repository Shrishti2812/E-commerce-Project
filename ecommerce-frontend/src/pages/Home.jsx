import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useRef } from "react";
import api from "../api/axios";

function Home({searchTerm, category, setCategory}){
    const [products,setProducts]=useState([]);
    const [sortOption, setSortOption] = useState("");
    

     const Categories=["all",...new Set(products.map((item)=>item.category ))];
 
 const filterItems= products.filter((item)=>{
const search =searchTerm.trim().toLowerCase()||" ";
  const matchSearch=item.title.toLowerCase().includes(search.toLowerCase())
 

  const matchCategory=category==="all"|| item.category ===category ;
 
  return matchSearch && matchCategory  ;
});
   const productsRef=useRef();
   const scrollToProducts = () => {
     productsRef.current?.scrollIntoView({
       behavior: "smooth",
       block: "start"
     });
   };
    useEffect(()=>{
      if(searchTerm.trim()){
        scrollToProducts();
      }
    }, [searchTerm]);
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
        <> 
  <div className="min-h-screen bg-white">

  {/* HERO SECTION */}
  <section className="px-4 py-12 md:py-16">
    <div className="max-w-7xl mx-auto bg-gray-100 rounded-3xl overflow-hidden">

      <div className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-12 py-8">

   
        <div>
          <span className="text-blue-600 font-semibold uppercase tracking-wide">
            New Collection
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-black leading-tight">
            Shop Smarter.<br />
            Live Better.
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-lg">
            Explore thousands of products curated for quality, affordability, and everyday convenience.
          </p>

          <button
            type="button"
            onClick={scrollToProducts}
            className="mt-8 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Browse Products
          </button>
        </div>

 
        <div className="hidden md:flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=60"
            alt="Hero"
            className="max-w-md w-full rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </div>
  </section>


  
   <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
    <div className="flex flex-wrap justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-2 py-4 md:p-4">

      <div className="flex gap-1 md:gap-3 flex-wrap">
        {Categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full px-2 md:px-4 py-2 text-sm font-medium transition ${
              category === item
                ? "bg-cyan-400 text-black"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="bg-slate-800 text-slate-200 rounded-md px-3 py-2 text-sm"
      >
        <option>Sort By</option>
        <option>Low-High</option>
        <option>High-Low</option>
        <option>A-Z</option>
        <option>Z-A</option>
      </select>

    </div>
  </section>



  {/* PRODUCT SECTION */}
  <section ref={productsRef} className="mx-auto px-5 md:px-12 pb-10">

    <div className="mb-6">
      <h2 className="text-3xl font-bold text-black">
        Product Gallery
      </h2>
      <p className="text-gray-600 text-sm mt-1">
        Browse all available products
      </p>
    </div>

    <div  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

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
  </section>

</div>
        </>
    )
}
export default Home;