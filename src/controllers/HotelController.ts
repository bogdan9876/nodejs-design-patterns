import BaseController from "./BaseController";
import HotelService from "../services/HotelService";

class HotelController extends BaseController<typeof HotelService> {
    constructor() {
        super(HotelService);
    }
}

export default new HotelController();
