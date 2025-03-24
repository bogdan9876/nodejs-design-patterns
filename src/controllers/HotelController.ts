import { inject, injectable } from "inversify";
import { IHotelService } from "../services/interfaces/IHotelService";
import BaseController from "./BaseController";

@injectable()
class HotelController extends BaseController<IHotelService> {
    constructor(@inject("IHotelService") hotelService: IHotelService) {
        super(hotelService);
    }
}

export default HotelController;