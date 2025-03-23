const IUserService = require('./interfaces/IUserService.js');

class UserService extends IUserService {
    constructor(userRepository) {
        super();
        this.userRepository = userRepository;
    }

    async create(data) {
        return await this.userRepository.create(data);
    }

    async getAll() {
        return await this.userRepository.getAll();
    }

    async getById(id) {
        return await this.userRepository.getById(id);
    }

    async update(id, data) {
        return await this.userRepository.update(id, data);
    }

    async delete(id) {
        return await this.userRepository.delete(id);
    }
}

module.exports = new UserService;
