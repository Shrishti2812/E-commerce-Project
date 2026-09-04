const Order=require("../models/order");
const Cart=require("../models/cart");

const createOrder = async (req, res) => {
    try {
        const { items, shippingAddress, paymentMethod, isBuyNow } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ message: "No items to order" });
        }

        const orderItems = items.map((item) => ({
            title: item.product.title,
            price: item.product.price,
            description: item.product.description,
            quantity: item.quantity,
            thumbnail: item.product.thumbnail
        }));

        const totalItems = items.reduce(
            (sum, item) => sum + item.quantity,
            0
        );

        const totalPrice = items.reduce(
            (sum, item) => sum + item.product.price * item.quantity,
            0
        );

        const order = new Order({
            user: req.user,
            items: orderItems,
            totalItems,
            totalPrice,
            shippingAddress,
            paymentMethod,
            status: "Placed"
        });

        await order.save();

        // Clear cart only when order came from cart
        console.log("isBuyNow:", isBuyNow);
        if (!isBuyNow) {
            const cart = await Cart.findOne({ user: req.user });

            if (cart) {
                cart.items = [];
                await cart.save();
            }
        }

        return res.status(201).json({
            message: "Order placed successfully",
            order
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};
const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user });

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Server error",error: error.message });
    }
};
module.exports={createOrder,getMyOrders};
