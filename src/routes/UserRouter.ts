import BaseRouter from "./BaseRouter";
import UserController from "../controllers/UserController";

class UserRouter extends BaseRouter {
    constructor() {
        super(UserController);
    }
}

export default new UserRouter().getRouter();
