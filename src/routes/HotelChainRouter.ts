import BaseRouter from './BaseRouter';
import HotelChainController from '../controllers/HotelChainController';

class HotelChainRouter extends BaseRouter {
    constructor() {
        super(HotelChainController);
    }
}

export default new HotelChainRouter().getRouter();