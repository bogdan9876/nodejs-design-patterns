import BaseRouter from "./BaseRouter";
import HotelController from "../controllers/HotelController";

class HotelRouter extends BaseRouter {
    constructor() {
        super(HotelController);
    }
}

export default new HotelRouter().getRouter();
