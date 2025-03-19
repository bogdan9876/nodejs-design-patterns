const {User} = require('../models');

class UserRepository {
    async createUser(userData) {
        return await User.create(userData);
    }

    async getAllUsers() {
        return await User.findAll();
    }

    async getUserById(userId) {
        return await User.findByPk(userId);
    }

    async updateUser(userId, updatedData) {
        const user = await User.findByPk(userId);
        return await user.update(updatedData);
    }

    async deleteUser(userId) {
        const user = await User.findByPk(userId);
        await user.destroy();
    }
}

module.exports = new UserRepository;