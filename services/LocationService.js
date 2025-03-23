const ILocationService = require('./interfaces/ILocationService.js');

class LocationService extends ILocationService {
    constructor(locationRepository) {
        super();
        this.locationRepository = locationRepository;
    }

    async create(data) {
        return await this.locationRepository.create(data);
    }

    async getAll() {
        return await this.locationRepository.getAll();
    }

    async getById(id) {
        return await this.locationRepository.getById(id);
    }

    async update(id, data) {
        return await this.locationRepository.update(id, data);
    }

    async delete(id) {
        return await this.locationRepository.delete(id);
    }
}

module.exports = new LocationService;
