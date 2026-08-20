import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      
      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">
            About Us
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to ShopSphere, your one-stop destination for all your shopping
            needs. We are passionate about providing a smooth and enjoyable
            online shopping experience.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            At ShopSphere, we offer high-quality products at affordable prices,
            making shopping simple, convenient, and accessible for everyone.
          </p>

          <Link
            to="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Browse Products
          </Link>
        </div>

        {/* Right Side */}
        <div>
         <img
  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
  alt="About ShopSphere"
  className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
/>
</div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="border border-gray-300 shadow-sm rounded-xl p-6 hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">
              Wide Variety
            </h2>

            <p className="text-gray-600">
              Explore products across electronics, fashion, home essentials,
              and more.
            </p>
          </div>

          <div className="border border-gray-300 shadow-sm rounded-xl p-6 hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">
              Secure Shopping
            </h2>

            <p className="text-gray-600">
              Enjoy safe payments and a trusted online shopping experience.
            </p>
          </div>

          <div className="border border-gray-300 shadow-sm rounded-xl p-6 hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">
              Fast Delivery
            </h2>

            <p className="text-gray-600">
              Get your products delivered quickly and reliably to your doorstep.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;