const BaseRouter = require("./BaseRouter.js");
const HotelChainController = require("../controllers/HotelChainController.js");

class HotelChainRouter extends BaseRouter {
    constructor() {
        super(HotelChainController);
    }
}

module.exports = new HotelChainRouter().getRouter();
