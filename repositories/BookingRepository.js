const { injectable } = require('inversify');
const IBookingRepository = require('./interfaces/IBookingRepository.js');
const { Booking, Review } = require('../models');

@injectable()
class BookingRepository extends IBookingRepository {
    async create(data) {
        return await Booking.create(data);
    }

    async getAll() {
        return await Booking.findAll({
            include: [{ model: Review, as: "Review" }]
        });
    }

    async getById(id) {
        return await Booking.findByPk(id, {
            include: [{ model: Review, as: "Review" }]
        });
    }
    async update(id, data) {
        const booking = await Booking.findByPk(id);
        return await booking.update(data);
    }

    async delete(id) {
        const booking = await Booking.findByPk(id);
        return await booking.destroy();
    }
}

module.exports = new BookingRepository;