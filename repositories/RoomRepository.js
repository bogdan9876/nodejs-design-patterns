const { injectable } = require('inversify');
const IRoomRepository = require('./interfaces/IRoomRepository.js');
const { Room, Booking } = require('../models');

@injectable()
class RoomRepository extends IRoomRepository {
    async create(data) {
        return await Room.create(data);
    }

    async getAll() {
        return await Room.findAll({
            include: [{ model: Booking, as: "Bookings" }]
        });
    }

    async getById(id) {
        return await Room.findByPk(id, {
            include: [{ model: Booking, as: "Bookings" }]
        });
    }

    async update(id, data) {
        const review = await Room.findByPk(id);
        return await review.update(data);
    }

    async delete(id) {
        const review = await Room.findByPk(id);
        return await review.destroy();
    }
}

module.exports = new RoomRepository;