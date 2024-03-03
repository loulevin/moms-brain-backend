import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { appointmentRouter } from "./routers/appointmentRouter.js";

dotenv.config();
const dbUrl = process.env.DB_URL || 'standard-mongodb-url'

const app = express();
app.use(express.json());
app.use(cors());
const port = 4510;

const backendDb = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mit MongoDB verbunden');
  } catch (e) {
    console.log(e);
  }
};

app.use("/api/calender", appointmentRouter);

backendDb().then(app.listen(port, console.log(`server is running on ${port}`)));
