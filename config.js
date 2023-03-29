import { config } from "dotenv";

config();

export default {
    host: process.env.HOST || "",
    port: process.env.PORT || "",
    database: process.env.DATABASE || "",
    admin: process.env.ADMIN || "",
    password: process.env.PASSWORD || "",
}