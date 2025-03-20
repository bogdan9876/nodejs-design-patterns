const BaseRouter = require("./BaseRouter.js");
const LocationController = require("../controllers/LocationController.js");

class LocationRouter extends BaseRouter {
    constructor() {
        super(LocationController);
    }
}

module.exports = new LocationRouter().getRouter();
