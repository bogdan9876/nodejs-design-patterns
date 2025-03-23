const IHotelService = require('./interfaces/IHotelService.js');

class HotelService extends IHotelService {
    constructor(hotelRepository) {
        super();
        this.hotelRepository = hotelRepository;
    }

    async create(data) {
        return await this.hotelRepository.create(data);
    }

    async getAll() {
        return await this.hotelRepository.getAll();
    }

    async getById(id) {
        return await this.hotelRepository.getById(id);
    }

    async update(id, data) {
        return await this.hotelRepository.update(id, data);
    }

    async delete(id) {
        return await this.hotelRepository.delete(id);
    }
}

module.exports = new HotelService;
