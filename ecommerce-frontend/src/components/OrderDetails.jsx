import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import { Link } from "react-router-dom";
const OrderDetails = ({  }) => {
const [order, setOrder] = useState(null);
const { id } = useParams();
    useEffect(() => { 
        const fetchOrderDetails = async () => {
            try {
                const response = await api.get(`/order/${id}`);
                setOrder(response.data);
          
            }
            catch (error) {
                console.error("Error fetching order details:", error);
            }}
        fetchOrderDetails()
    }, [id]);

if (!order) {
    return <div>Loading...</div>;
}
                
return (
  <div className="min-h-screen bg-gray-100 px-4 md:px-8 py-6 text-slate-900">

    <div className=" max-w-6xl mx-auto">

      {/* Page Header */}
      <div className="mb-5 ">
        <h1 className="text-2xl font-bold">Order Details</h1>
        <p className="text-sm text-gray-500 mt-1">
          Here are the details of your order
        </p>
      </div>


      {/* Order Info */}
      <div className="bg-green-50 border border-gray-200 rounded-xl shadow-sm px-5 py-4 mb-5">

        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">

          {/* Order number */}
          <div>
            
              <h2 className="text-lg font-semibold">
                Order #{order._id.slice(-6).toUpperCase()}
              </h2>
 <p className="text-sm text-gray-500 mt-1 mb-3">
              Placed on {new Date(order.createdAt).toLocaleDateString()}
            </p>
              <span className="px-4 py-2 font-medium text-green-700 bg-green-100 rounded-full">
                Ordered
              </span>
          

           
          </div>


          {/* Shipping Address */}
          <div className="sm:text-right">
            <p className="text-sm font-semibold mb-1">
              Shipping Address
            </p>

            <p className="text-sm text-gray-500">
              {order.shippingAddress.fullName}
            </p>

            <p className="text-sm text-gray-500">
              {order.shippingAddress.address},{" "}
              {order.shippingAddress.city}
            </p>

            <p className="text-sm text-gray-500">
              {order.shippingAddress.state},{" "}
              {order.shippingAddress.postalCode}
            </p>
          </div>

        </div>
      </div>


      {/* Ordered Items */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

        <div className="px-5 py-3 border-b border-gray-200">
          <h3 className="font-semibold">
            Ordered Items
          </h3>
        </div>


        <div>
          {order.items.map((item, index) => (

            <div
              key={order._id + index}
              className="flex gap-4 px-5 py-4 border-b border-gray-100 last:border-b-0"
            >

              {/* Image */}
              <div className="w-20 h-20 shrink-0 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>


              {/* Product */}
              <div className="flex-1 min-w-0">

                <h4 className="font-medium text-gray-900 line-clamp-2">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  ₹{item.price} × {item.quantity}
                </p>

                <p className="text-sm font-semibold text-gray-900 mt-1">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>

              </div>

            </div>

          ))}
        </div>

      </div>


      {/* Order Summary */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm mt-5 px-5 py-4">

        <h3 className="font-semibold mb-4">
          Order Summary
        </h3>

        <div className="space-y-3">

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">
              Total Items
            </span>
            <span className="font-medium">
              {order.totalItems}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">
              Payment Method
            </span>
            <span className="font-medium">
              {order.paymentMethod.charAt(0).toUpperCase() + order.paymentMethod.slice(1)}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-3 flex justify-between">
            <span className="font-semibold">
              Total Price
            </span>
            <span className="font-bold">
              ₹{order.totalPrice.toFixed(2)}
            </span>
          </div>

        </div>
      </div>


      {/* Back */}
      <div className="mt-5">
        <Link to="/order">
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition text-sm font-medium">
            ← Back to Orders
          </button>
        </Link>
      </div>

    </div>
  </div>
);
 

}
export default OrderDetails;