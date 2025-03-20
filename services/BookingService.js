const BaseService = require('./BaseService.js');
const BookingRepository = require('../repositories/BookingRepository.js');

class BookingService extends BaseService {
    constructor() {
        super(BookingRepository);
    }
}

module.exports = new BookingService;
