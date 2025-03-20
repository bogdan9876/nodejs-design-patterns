const BaseService = require('./BaseService.js');
const LocationRepository = require('../repositories/LocationRepository.js');

class LocationService extends BaseService {
    constructor() {
        super(LocationRepository);
    }
}

module.exports = new LocationService;
