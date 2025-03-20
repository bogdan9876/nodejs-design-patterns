const BaseRepository = require('./BaseRepository.js');
const { Hotel, Room, Review, Location } = require('../models');

class HotelRepository extends BaseRepository {
    constructor() {
        super(Hotel);
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
}

module.exports = new HotelRepository;