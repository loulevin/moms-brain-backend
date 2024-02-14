import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 4510;

const dbUrl = process.env.DB_URL;

const backendDb = async () => {
  try {
    await mongoose.connect(dbUrl);
  } catch (e) {
    console.log(e);
  }
};

backendDb().then(app.listen(port, console.log(`server is running on ${port}`)));
