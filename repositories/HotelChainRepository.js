const BaseRepository = require('./BaseRepository.js');
const { HotelChain, Hotel } = require('../models');

class HotelChainRepository extends BaseRepository {
    constructor() {
        super(HotelChain);
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
}

module.exports = new HotelChainRepository;