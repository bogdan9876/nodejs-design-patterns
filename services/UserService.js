const BaseService = require('./BaseService.js');
const UserRepository = require('../repositories/UserRepository.js');

class UserService extends BaseService {
    constructor() {
        super(UserRepository);
    }
}

module.exports = new UserService;
