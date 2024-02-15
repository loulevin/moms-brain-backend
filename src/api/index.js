import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { appointmentRouter } from "./routers/appointmentRouter.js";


dotenv.config();

const app = express();
app.use(express.json());
const port = 4510;

const dbUrl = process.env.DB_URL;

const backendDb = async () => {
  try {
    await mongoose.connect(dbUrl);
  } catch (e) {
    console.log(e);
  }
};

app.use('/', appointmentRouter)

backendDb().then(app.listen(port, console.log(`server is running on ${port}`)));
