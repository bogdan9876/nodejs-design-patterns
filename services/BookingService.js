const { inject, injectable } = require('inversify');
const IBookingService = require('./interfaces/IBookingService.js');
const IBookingRepository = require('../repositories/IBookingRepository.js');

@injectable()
class BookingService extends IBookingService {
    constructor(
        @inject('IBookingRepository') bookingRepository
    ) {
        super();
        this.bookingRepository = bookingRepository;
    }

    async create(data) {
        return await BookingRepository.create(data);
    }

    async getAll() {
        return await BookingRepository.getAll();
    }

    async getById(id) {
        return await BookingRepository.getById(id);
    }

    async update(id, data) {
        return await BookingRepository.update(id, data);
    }

    async delete(id) {
        return await BookingRepository.delete(id);
    }
}

module.exports = BookingService;
