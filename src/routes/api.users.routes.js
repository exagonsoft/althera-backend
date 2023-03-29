import { Router } from "express";
import { Methods as _subscrivers_controller } from "../controllers/subscrivers.controller";

const _router = Router();
_router.get("/subscrivers", _subscrivers_controller.GetSubscrivers);
_router.get("/subscrivers/:id", _subscrivers_controller.GetSubscriverDetails);
_router.post("/subscrivers", _subscrivers_controller.AddSubscriver);
_router.delete("/subscrivers/:id", _subscrivers_controller.DeleteSubscriver);

export default _router;