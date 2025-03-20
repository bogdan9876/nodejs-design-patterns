const BaseRepository = require('./BaseRepository.js');
const {Location} = require('../models');

class LocationRepository extends BaseRepository {
    constructor() {
        super(Location);
    }
}

module.exports = new LocationRepository;