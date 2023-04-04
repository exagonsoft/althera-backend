const router = require("express");
const { GetSubscrivers, GetSubscriverDetails, AddSubscriver, DeleteSubscriver } = require("../controllers/subscrivers.controller");

const _routes = router();
_routes.get("/subscrivers", GetSubscrivers);
_routes.get("/subscrivers/:id", GetSubscriverDetails);
_routes.post("/subscrivers", AddSubscriver);
_routes.delete("/subscrivers/:id", DeleteSubscriver);
module.exports = _routes