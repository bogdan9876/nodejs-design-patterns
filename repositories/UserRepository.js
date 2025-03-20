const BaseRepository = require('./BaseRepository.js');
const {User, Booking, Review} = require('../models');

class UserRepository extends BaseRepository {
    constructor() {
        super(User);
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
}

module.exports = new UserRepository;