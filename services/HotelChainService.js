const BaseService = require('./BaseService.js');
const HotelChainRepository = require('../repositories/HotelChainRepository.js');

class HotelChainService extends BaseService {
    constructor() {
        super(HotelChainRepository);
    }
}

module.exports = new HotelChainService;
