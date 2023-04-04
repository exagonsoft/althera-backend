const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const _routes = require("./routes/api.users.routes");
const config = require("./config/config");

const {server_port, allowedDomins} = config

const port = server_port;
const app = express();

app.use(express.json())
app.use(cors({origuin: allowedDomins}))
app.use(helmet());
app.use(compression())
app.use(_routes)
const server = http.createServer(app);

server.listen(() => {
    console.log(`Server Up and Running on port: ${port}`)
})