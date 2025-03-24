import BaseController from "./BaseController";
import HotelChainService from "../services/HotelChainService";

class HotelChainController extends BaseController<typeof HotelChainService> {
    constructor() {
        super(HotelChainService);
    }
}

export default new HotelChainController();
