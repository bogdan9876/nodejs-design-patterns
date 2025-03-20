const BaseRepository = require('./BaseRepository.js');
const {HotelChain} = require('../models');

class HotelChainRepository extends BaseRepository {
    constructor() {
        super(HotelChain);
    }
}

module.exports = new HotelChainRepository;