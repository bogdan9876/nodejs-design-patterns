import { container } from "../config/inversify";
import BaseRouter from "./BaseRouter";
import HotelController from "../controllers/HotelController";

class HotelRouter extends BaseRouter {
    constructor() {
        const hotelController = container.get<HotelController>("HotelController");
        super(hotelController);
    }
}

export default new HotelRouter().getRouter();