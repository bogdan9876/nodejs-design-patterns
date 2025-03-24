import { inject, injectable } from "inversify";
import { IUserService } from "../services/interfaces/IUserService";
import BaseController from "./BaseController";

@injectable()
class UserController extends BaseController<IUserService> {
    constructor(@inject("IUserService") userService: IUserService) {
        super(userService);
    }
}

export default UserController;