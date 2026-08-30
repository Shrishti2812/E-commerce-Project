const mongoose=require("mongoose");
const Product=require("../models/product");
require("dotenv").config();
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const connectDb=require("../config/db");

async function seedProducts() {
  try {
    await connectDb();
    console.log("MongoDB connected");
    const response = await fetch("https://dummyjson.com/products");
const data = await response.json();
const products = data.products.map((product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    brand: product.brand,
    category: product.category,
    price: product.price,
    discountPercentage: product.discountPercentage,
    rating: product.rating,
    images: product.images,
    thumbnail: product.thumbnail,
    reviews: product.reviews
}));
 
    await Product.insertMany(products);

    console.log("Products seeded successfully");

  } catch (error) {
    console.error(error);
  }
}

seedProducts();