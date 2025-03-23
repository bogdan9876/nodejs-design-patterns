const IBookingService = require('./interfaces/IBookingService.js');

class BookingService extends IBookingService {
    constructor(bookingRepository) {
        super();
        this.bookingRepository = bookingRepository;
    }

    async create(data) {
        return await this.bookingRepository.create(data);
    }

    async getAll() {
        return await this.bookingRepository.getAll();
    }

    async getById(id) {
        return await this.bookingRepository.getById(id);
    }

    async update(id, data) {
        return await this.bookingRepository.update(id, data);
    }

    async delete(id) {
        return await this.bookingRepository.delete(id);
    }
}

module.exports = BookingService;
