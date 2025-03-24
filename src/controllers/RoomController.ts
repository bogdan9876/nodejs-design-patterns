import BaseController from "./BaseController";
import RoomService from "../services/RoomService";

class RoomController extends BaseController<typeof RoomService> {
    constructor() {
        super(RoomService);
    }
}

export default new RoomController();
