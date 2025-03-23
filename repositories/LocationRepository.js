const { injectable } = require('inversify');
const ILocationRepository = require('./interfaces/ILocationRepository.js');
const {Location} = require('../models');

@injectable()
class LocationRepository extends ILocationRepository {
    async create(data) {
        return await Location.create(data);
    }

    async getAll() {
        return await Location.findAll();
    }

    async getById(id) {
        return await Location.findByPk(id);
    }

    async update(id, data) {
        const location = await Location.findByPk(id);
        return await location.update(data);
    }

    async delete(id) {
        const location = await Location.findByPk(id);
        return await location.destroy();
    }
}

module.exports = new LocationRepository;