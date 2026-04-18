import{Link} from "react-router-dom";
function Checkout(){
    return (
        <>
        <h1 className="text-2xl p-2">Checkout Page</h1>
        <p>Thank you for your purchase! Your order has been placed successfully.</p>
        <p>We will send you a confirmation email with the details of your order.</p>
        <p>If you have any questions or need further assistance, please contact our customer support.</p>
      <button className="bg-blue-500 text-white p-2 rounded-lg mt-4">
        Continue Shopping</button> 
        </>
    )
}
export default Checkout;