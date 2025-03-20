const BaseRepository = require('./BaseRepository.js');
const { Room, Booking } = require('../models');

class RoomRepository extends BaseRepository {
    constructor() {
        super(Room);
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
}

module.exports = new RoomRepository;