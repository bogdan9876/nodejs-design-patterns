import { inject, injectable } from "inversify";
import { IRoomService } from "../services/interfaces/IRoomService";
import BaseController from "./BaseController";

@injectable()
class RoomController extends BaseController<IRoomService> {
    constructor(@inject("IRoomService") roomService: IRoomService) {
        super(roomService);
    }
}

export default RoomController;