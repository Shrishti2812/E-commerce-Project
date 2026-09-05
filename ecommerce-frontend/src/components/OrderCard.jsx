 import {Link} from "react-router-dom";
function OrderCard({ order }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

      {/* Order Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50">
        <div>
          <p className="font-semibold text-gray-900">
            Order #{order._id.slice(-6).toUpperCase()}
          </p>

          <p className="text-sm text-gray-500 mt-1">
            Placed on {new Date(order.createdAt).toLocaleDateString()}
          </p>
        </div>

        <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
          Ordered
        </span>
      </div>


      {/* Products */}
      <div className="p-5">

        <p className="text-sm font-medium text-gray-700 mb-3">
          {order.items.length} {order.items.length === 1 ? "Item" : "Items"}
        </p>

        <div className="max-h-[250px] overflow-y-auto space-y-3 pr-1">

          {order.items.map((item, index) => (
            <div
              key={order._id + index}
              className="flex gap-4 p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition"
            >

              {/* Product Image */}
              <div className="w-20 h-20 shrink-0 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>


              {/* Product Info */}
              <div className="flex-1 min-w-0">

                <h4 className="font-medium text-gray-900 line-clamp-2">
                  {item.title}
                </h4>

                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <p>₹{item.price}</p>
                  <span>×</span>
                  <p>{item.quantity}</p>
                </div>

                <p className="text-sm font-medium text-gray-800 mt-1">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>


      {/* Order Footer */}
      <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100">

        <div>
          <p className="text-sm text-gray-500">
            Total Amount
          </p>

          <p className="text-lg font-bold text-gray-900">
            ₹{order.totalPrice.toFixed(2)}
          </p>
        </div>

    <Link to={`/order/${order._id}`}>  <button
          className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-lg
                     hover:bg-blue-600 transition"
        >
          View Details
        </button></Link>  

      </div>

    </div>
  );
}

export default OrderCard;
 
