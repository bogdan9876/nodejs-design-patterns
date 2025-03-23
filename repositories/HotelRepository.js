const { injectable } = require('inversify');
const IHotelRepository = require('./interfaces/IHotelRepository.js');
const { Hotel, Room, Review, Location } = require('../models');

@injectable()
class HotelRepository extends IHotelRepository {
    async create(data) {
        return await Hotel.create(data);
    }

    async getAll() {
        return await Hotel.findAll({
            include: [
                { model: Location, as: "Location" },
                { model: Room, as: "Rooms" },
                { model: Review, as: "Reviews" }
            ],
        });
    }

    async getById(id) {
        return await Hotel.findByPk(id, {
            include: [
                { model: Location, as: "Location" },
                { model: Room, as: "Rooms" },
                { model: Review, as: "Reviews" }],
        });
    }

    async update(id, data) {
        const hotel = await Hotel.findByPk(id);
        return await hotel.update(data);
    }

    async delete(id) {
        const hotel = await Hotel.findByPk(id);
        return await hotel.destroy();
    }
}

module.exports = new HotelRepository;