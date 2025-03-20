const BaseController = require('./BaseController.js');
const UserService = require('../services/UserService.js');

class UserController extends BaseController {
    constructor() {
        super(UserService);
    }
}

module.exports = new UserController;