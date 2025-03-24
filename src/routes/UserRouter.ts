import { container } from "../config/inversify";
import BaseRouter from "./BaseRouter";
import UserController from "../controllers/UserController";

class UserRouter extends BaseRouter {
    constructor() {
        const userController = container.get<UserController>("UserController");
        super(userController);
    }
}

export default new UserRouter().getRouter();