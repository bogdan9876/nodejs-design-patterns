const IUserService = require('./interfaces/IUserService.js');

class UserService extends IUserService {
    constructor(userService) {
       this.userService = userService;
    }

    async create(data) {
        return await this.userService.create(data);
    }

    async getAll() {
        return await this.userService.getAll();
    }

    async getById(id) {
        return await this.userService.getById(id);
    }

    async update(id, data) {
        return await this.userService.update(id, data);
    }

    async delete(id) {
        return await this.userService.delete(id);
    }
}

module.exports = UserService;
