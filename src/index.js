// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDB();

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (err) => {
//       console.error("Express server error:", err);
//       throw err;
//     });

//     app.listen(process.env.PORT || 3000, () => {
//       console.log(`Server is running on port ${process.env.PORT || 3000}`);
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error;
//   }
// })();
