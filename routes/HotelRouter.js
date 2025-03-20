const BaseRouter = require("./BaseRouter.js");
const HotelController = require("../controllers/HotelController.js");

class HotelRouter extends BaseRouter {
    constructor() {
        super(HotelController);
    }
}

module.exports = new HotelRouter().getRouter();
