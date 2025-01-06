import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "./data/products.js";
import users from "./data/users.js";
import User from "./models/userModel.js";
import colors from "colors";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import ConnectDB from "./config/db.js";

ConnectDB();

const importData = async () => {
  try {
    const createdUsers = await User.create(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.create(sampleProducts);
    console.log("Data Imported".green.inverse);
  } catch (err) {
    console.log(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log("Data Destroyed".red.inverse);
    process.exit();
  } catch (err) {
    console.log(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
