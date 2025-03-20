const BaseRepository = require('./BaseRepository.js');
const {Hotel} = require('../models');

class HotelRepository extends BaseRepository {
    constructor() {
        super(Hotel);
    }
}

module.exports = new HotelRepository;