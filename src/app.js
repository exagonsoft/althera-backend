import express  from "express";
import morgan  from "morgan";
//Routes
import _subscrivers_route  from "./routes/api.users.routes";

const app = express();

///Settings
app.set("port", 4004)

///MiddleWares
app.use(morgan("dev"))
app.use(express.json())

//Routes
app.use("/",_subscrivers_route);


export default app