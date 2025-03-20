const BaseService = require('./BaseService.js');
const HotelRepository = require('../repositories/HotelRepository.js');

class HotelService extends BaseService {
    constructor() {
        super(HotelRepository);
    }
}

module.exports = new HotelService;
