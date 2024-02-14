import dotenv from 'dotenv';
import * as config from "./config.js"

dotenv.config();

export const backendPort = () => {
    return 4510
}

export const dbUrl = () => {
    const dbUrl = process.env.DB_URL
    if (typeof dbUrl === "string") {
        return dbUrl
    } else {
        return ""
    }
}

export const backendUrl = () => {
    return `http://localhost:${config.backendPort()}`
}