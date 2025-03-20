const BaseRepository = require('./BaseRepository.js');
const {Booking, Review} = require('../models');

class BookingRepository extends BaseRepository {
    constructor() {
        super(Booking);
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
}

module.exports = new BookingRepository;