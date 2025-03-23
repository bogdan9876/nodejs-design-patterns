const IHotelChainService = require('./interfaces/IHotelChainService.js');

class HotelChainService extends IHotelChainService {
    constructor(hotelChainRepository) {
       this.hotelChainRepository = hotelChainRepository;
    }

    async create(data) {
        return await this.hotelChainRepository.create(data);
    }

    async getAll() {
        return await this.hotelChainRepository.getAll();
    }

    async getById(id) {
        return await this.hotelChainRepository.getById(id);
    }

    async update(id, data) {
        return await this.hotelChainRepository.update(id, data);
    }

    async delete(id) {
        return await this.hotelChainRepository.delete(id);
    }
}

module.exports = HotelChainService;
