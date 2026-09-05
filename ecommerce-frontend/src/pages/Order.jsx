import OrderCard from "../components/OrderCard";
 import api from "../api/axios";
 import { useEffect, useState } from "react";
function Order(){
    const [orders,setOrders]=useState([]);
useEffect(()=>{
    const fetchOrders=async()=>{
        try{
            const response=await api.get("/order/");
            setOrders(response.data);
            console.log(response.data);
        }
        catch(error){
            console.error("Error fetching orders:", error);
        }}
    fetchOrders();
},[]);
    return (
        <>
            <div className=" px-4 md:px-8 bg-gray-100 py-6 mx-auto rounded-md shadow-sm min-h-screen text-slate-900">
                <h1 className="text-3xl font-semibold text-gray-900 py-3 mb-2  ">My Orders</h1>
<div className="col-span-1 md:col-span-2 flex flex-col gap-4">
    {orders.map((order) => (
        <OrderCard key={order._id} order={order} />
    ))}
</div>
            </div>
        </>
    )
}
export default Order;