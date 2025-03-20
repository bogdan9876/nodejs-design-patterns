const BaseRepository = require('./BaseRepository.js');
const {Booking} = require('../models');

class BookingRepository extends BaseRepository {
    constructor() {
        super(Booking);
    }
}

module.exports = new BookingRepository;