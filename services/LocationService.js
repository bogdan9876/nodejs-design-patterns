const ILocationService = require('./interfaces/ILocationService.js');

class LocationService extends ILocationService {
    constructor(locationService) {
       this.locationService = locationService;
    }

    async create(data) {
        return await this.locationService.create(data);
    }

    async getAll() {
        return await this.locationService.getAll();
    }

    async getById(id) {
        return await this.locationService.getById(id);
    }

    async update(id, data) {
        return await this.locationService.update(id, data);
    }

    async delete(id) {
        return await this.locationService.delete(id);
    }
}

module.exports = LocationService;
