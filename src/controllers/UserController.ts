import BaseController from "./BaseController";
import UserService from "../services/UserService";

class UserController extends BaseController<typeof UserService> {
    constructor() {
        super(UserService);
    }
}

export default new UserController();
