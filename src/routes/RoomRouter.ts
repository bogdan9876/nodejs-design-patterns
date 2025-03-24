import { container } from "../config/inversify";
import BaseRouter from "./BaseRouter";
import RoomController from "../controllers/RoomController";

class RoomRouter extends BaseRouter {
    constructor() {
        const roomController = container.get<RoomController>("RoomController");
        super(roomController);
    }
}

export default new RoomRouter().getRouter();