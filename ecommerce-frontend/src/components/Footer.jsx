import { Link } from "react-router-dom";
function Footer(){
    return (
        <>
      <div className="flex flex-col gap-4 p-2 md:p-4 bg-gray-800 text-white">

  <div className="flex flex-col gap-4 md:flex-row md:justify-around md:text-left">

    <div className="flex flex-col justify-center items-center md:items-start  md:gap-4">
      <span className="font-bold text-sm sm:text-lg md:text-3xl lg:text-4xl tracking-tight text-white">
        ShopSphere
      </span>

      <p className="text-gray-400 text-xs md:text-sm mt-1 max-w-[220px]">
        Your one-stop destination for everyday shopping.
      </p>
    </div>

    <div className="flex justify-center gap-4 md:gap-30 p-2">

      <div className="flex flex-col gap-1 items-center">
        <h2 className="text-sm md:text-lg font-semibold mt-2">
          Quick Links
        </h2>

        <Link
          className="text-gray-300 hover:text-white transition-colors text-sm md:text-lg"
          to="/"
        >
          Home
        </Link>

        <Link
          className="text-gray-300 hover:text-white transition-colors text-sm md:text-lg"
          to="/about"
        >
          About
        </Link>

        <Link
          className="text-gray-300 hover:text-white transition-colors text-sm md:text-lg"
          to="/contact"
        >
          Contact
        </Link>

        <Link
          className="text-gray-300 hover:text-white transition-colors text-sm md:text-lg"
          to="/cart"
        >
          Cart
        </Link>
      </div>

      <div className="flex flex-col gap-1 items-center">
        <h2 className="text-sm md:text-lg font-semibold mt-2">
          Contact Us
        </h2>

        <p className="text-gray-300 text-sm md:text-lg">
          123 Main Street, USA
        </p>

        <p className="text-gray-300 text-sm md:text-lg">
          info@shopsphere.com
        </p>
      </div>

      <div className="flex flex-col gap-1 items-center">
        <h2 className="text-sm md:text-lg font-semibold mt-2">
          Category
        </h2>

        <p className="text-gray-300 text-sm md:text-lg">Electronics</p>
        <p className="text-gray-300 text-sm md:text-lg">Clothing</p>
        <p className="text-gray-300 text-sm md:text-lg">Kitchen</p>
      </div>

    </div>
  </div>

  <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
    © {new Date().getFullYear()} ShopSphere. All rights reserved.
  </div>
</div>
        </>
    )
}
export default Footer;