import { container } from "../config/inversify";
import BaseRouter from './BaseRouter';
import HotelChainController from '../controllers/HotelChainController';

class HotelChainRouter extends BaseRouter {
    constructor() {
        const hotelChainController = container.get<HotelChainController>("HotelChainController");
        super(hotelChainController);
    }
}

export default new HotelChainRouter().getRouter();