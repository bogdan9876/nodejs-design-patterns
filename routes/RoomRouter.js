const BaseRouter = require("./BaseRouter.js");
const RoomController = require("../controllers/RoomController.js");

class RoomRouter extends BaseRouter {
    constructor() {
        super(RoomController);
    }
}

module.exports = new RoomRouter().getRouter();
