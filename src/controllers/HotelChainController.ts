import { inject, injectable } from "inversify";
import { IHotelChainService } from "../services/interfaces/IHotelChainService";
import BaseController from "./BaseController";

@injectable()
class HotelChainController extends BaseController<IHotelChainService> {
    constructor(@inject("IHotelChainService") hotelChainService: IHotelChainService) {
        super(hotelChainService);
    }
}

export default HotelChainController;