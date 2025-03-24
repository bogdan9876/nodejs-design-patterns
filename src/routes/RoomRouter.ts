import BaseRouter from "./BaseRouter";
import RoomController from "../controllers/RoomController";

class RoomRouter extends BaseRouter {
    constructor() {
        super(RoomController);
    }
}

export default new RoomRouter().getRouter();
