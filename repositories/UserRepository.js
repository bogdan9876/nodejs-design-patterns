const IUserRepository = require('./interfaces/IUserRepository.js');
const {User, Booking, Review} = require('../models');

class UserRepository extends IUserRepository {
    async create(data) {
        return await User.create(data);
    }

    async getAll() {
        return await User.findAll({
            include: [
                { model: Booking, as: "Bookings" },
                { model: Review, as: "Reviews" },
            ]
        });
    }

    async getById(id) {
        return await User.findByPk(id, {
            include: [
                { model: Booking, as: "Bookings" },
                { model: Review, as: "Reviews" },
            ]
        });
    }

    async update(id, data) {
        const user = await User.findByPk(id);
        return await user.update(data);
    }

    async delete(id) {
        const user = await User.findByPk(id);
        return await user.destroy();
    }
}

module.exports = UserRepository;