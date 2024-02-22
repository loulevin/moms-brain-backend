import express from "express";
import { addSingleTab, getSingleTab } from "../controllers/tabsController.js";

export const tabsRouter = express.Router();

tabsRouter.route("/").post(addSingleTab).get(getSingleTab);
