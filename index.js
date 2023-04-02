const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const port = 4004;
const app = express();

app.use(express.json())
app.use(cors({origuin: []}))
app.use(helmet());
app.use(compression())
app.get('/', (req, res) => {
    return res.send("Wellcome to AltherA Metaverse")
})
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server Up and Running on port: ${port}`)
})