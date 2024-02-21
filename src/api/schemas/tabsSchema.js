import mongoose from "mongoose";
import { todoSchema } from "./todoSchema.js";

export const tabsSchema = new mongoose.Schema(
    {
        tabsTitle: String,
        todo: [todoSchema],
    },
    {
        collection: "tabs",
        timestamps: true,
    }
)

export const Tabs = mongoose.model('Tabs', tabsSchema)