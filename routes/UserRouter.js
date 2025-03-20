const BaseRouter = require("./BaseRouter.js");
const UserController = require("../controllers/UserController.js");

class UserRouter extends BaseRouter {
    constructor() {
        super(UserController);
    }
}

module.exports = new UserRouter().getRouter();
