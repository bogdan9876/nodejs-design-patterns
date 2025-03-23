const { injectable } = require('inversify');
const IHotelChainRepository = require('./interfaces/IHotelChainRepository.js');
const { HotelChain, Hotel } = require('../models');

@injectable()
class HotelChainRepository extends IHotelChainRepository {
    async create(data) {
        return await HotelChain.create(data);
    }

    async getAll() {
        return await HotelChain.findAll({
            include: [{ model: Hotel, as: "Hotels" }],
        });
    }

    async getById(id) {
        return await HotelChain.findByPk(id, {
            include: [{ model: Hotel, as: "Hotels" }],
        });
    }

    async update(id, data) {
        const hotelChain = await HotelChain.findByPk(id);
        return await hotelChain.update(data);
    }

    async delete(id) {
        const hotelChain = await HotelChain.findByPk(id);
        return await hotelChain.destroy();
    }
}

module.exports = new HotelChainRepository;